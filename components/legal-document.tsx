import Link from "next/link";
import type { ReactNode } from "react";

import type { LegalSection } from "@/content/legal/types";
import {
  LEGAL_CONTACT_EMAIL,
  LEGAL_DRAFT_MODE,
  LEGAL_EFFECTIVE_DATE,
} from "@/content/legal/meta";
import { SubprocessorTable } from "@/components/subprocessor-table";

type LegalDocumentProps = {
  title: string;
  sections: LegalSection[];
  seeAlso?: { label: string; href: string };
};

function renderParagraphWithLinks(text: string) {
  const emailPattern = new RegExp(LEGAL_CONTACT_EMAIL.replace(".", "\\."), "g");
  const parts = text.split(emailPattern);

  if (parts.length === 1) {
    return text;
  }

  return parts.flatMap((part, index) => {
    const nodes: ReactNode[] = [part];
    if (index < parts.length - 1) {
      nodes.push(
        <a
          key={`email-${index}`}
          href={`mailto:${LEGAL_CONTACT_EMAIL}`}
          className="text-accent hover:underline"
        >
          {LEGAL_CONTACT_EMAIL}
        </a>,
      );
    }
    return nodes;
  });
}

export function LegalDocument({ title, sections, seeAlso }: LegalDocumentProps) {
  return (
    <article className="prose-neutral mx-auto max-w-2xl">
      <h1 className="font-display text-3xl font-semibold text-foreground">
        {title}
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Last updated: {LEGAL_EFFECTIVE_DATE}
        {LEGAL_DRAFT_MODE ? ". Draft — review before publish." : "."}
      </p>

      {seeAlso ? (
        <p className="mt-4 text-sm text-muted-foreground">
          See also:{" "}
          <Link href={seeAlso.href} className="text-accent hover:underline">
            {seeAlso.label}
          </Link>
        </p>
      ) : null}

      <div className="mt-8 space-y-8 text-base leading-7 text-muted-foreground">
        {sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="text-lg font-semibold text-foreground">
              {section.title}
            </h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index} className="mt-2">
                {renderParagraphWithLinks(paragraph)}
              </p>
            ))}
            {section.showSubprocessorTable ? <SubprocessorTable /> : null}
          </section>
        ))}
      </div>

      <p className="mt-12">
        <Link href="/" className="text-sm text-accent hover:underline">
          ← Back to home
        </Link>
      </p>
    </article>
  );
}
