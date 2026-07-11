"use client";

import { useEffect } from "react";

import { storeUtmParamsFromUrl } from "@/lib/app-url";

export function useUtmCapture(): void {
  useEffect(() => {
    storeUtmParamsFromUrl();
  }, []);
}
