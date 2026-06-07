export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  /** When true, render the subprocessor table after intro paragraphs. */
  showSubprocessorTable?: boolean;
};

export type SubprocessorRow = {
  provider: string;
  purpose: string;
  location: string;
};
