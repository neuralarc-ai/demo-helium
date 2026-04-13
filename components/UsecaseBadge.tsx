interface UsecaseBadgeProps {
  label: string;
}

const colorMap: Record<string, string> = {
  Students: "bg-primary/20 text-primary border-primary/30",
  Research: "bg-secondary/20 text-secondary border-secondary/30",
  Workflow: "bg-accent/20 text-accent border-accent/30",
  "AI Agent": "bg-primary/20 text-primary border-primary/30",
};

export default function UsecaseBadge({ label }: UsecaseBadgeProps) {
  const colors = colorMap[label] ?? "bg-muted/20 text-muted border-muted/30";

  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${colors}`}
    >
      {label}
    </span>
  );
}
