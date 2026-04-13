interface ResultPreviewProps {
  prompt: string;
  result: string;
}

export default function ResultPreview({ prompt, result }: ResultPreviewProps) {
  return (
    <div className="rounded-lg bg-[#1e1e1e] p-2.5 font-mono text-[11px] leading-relaxed">
      <p className="mb-1">
        <span className="text-primary font-semibold">Prompt:</span>{" "}
        <span className="text-muted/60">&quot;{prompt}&quot;</span>
      </p>
      <p>
        <span className="text-accent font-semibold">Result:</span>{" "}
        <span className="text-muted/50">&quot;{result}&quot;</span>
      </p>
    </div>
  );
}
