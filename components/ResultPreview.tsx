interface ResultPreviewProps {
  prompt: string;
  result: string;
}

export default function ResultPreview({ prompt, result }: ResultPreviewProps) {
  return (
    <div className="rounded-lg bg-[#2a2a2a] p-3 font-mono text-xs leading-relaxed">
      <p className="text-secondary mb-1">
        <span className="text-primary font-semibold">Prompt:</span>{" "}
        <span className="text-muted/80">&quot;{prompt}&quot;</span>
      </p>
      <p className="text-secondary">
        <span className="text-accent font-semibold">Result:</span>{" "}
        <span className="text-muted/70">&quot;{result}&quot;</span>
      </p>
    </div>
  );
}
