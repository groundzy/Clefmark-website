import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  company?: string;
  repCount?: string;
  message?: string;
  website?: string;
};

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const company = body.company?.trim();
  const repCount = body.repCount?.trim();
  const message = body.message?.trim() ?? "";

  if (!name || !email || !company || !repCount) {
    return NextResponse.json({ error: "All required fields must be filled." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() ?? "hello@clefmark.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL?.trim() ?? "Clefmark <contact@send.clefmark.com>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 503 },
    );
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Rep count: ${repCount}`,
    "",
    message || "(no message)",
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Clefmark contact — ${company}`,
      text,
    }),
  });

  if (!response.ok) {
    const resendError = await response.text().catch(() => "");
    console.error("Resend contact send failed:", response.status, resendError);
    return NextResponse.json(
      { error: "Failed to send message. Try email instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
