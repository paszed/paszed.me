import {
  CodeBlock as DesignSystemCodeBlock,
} from "@/design-system";

interface CodeBlockProps {
  language?: string;
  code: string;
}

export function CodeBlock({
  language,
  code,
}: CodeBlockProps) {
  return (
    <DesignSystemCodeBlock
      language={language}
      code={code}
    />
  );
}
