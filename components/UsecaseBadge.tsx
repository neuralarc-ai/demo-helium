interface UsecaseBadgeProps {
  label: string;
}

const colorMap: Record<string, string> = {
  Students: "bg-primary/15 text-[#d4909b] border-primary/25",
  Research: "bg-secondary/15 text-[#5ba8c8] border-secondary/25",
  Workflow: "bg-[#3a3520] text-[#c8b830] border-[#c8b830]/30",
  "AI Agent": "bg-primary/15 text-[#d4909b] border-primary/25",
};

export default function UsecaseBadge({ label }: UsecaseBadgeProps) {
  const colors =
    colorMap[label] ?? "bg-muted/10 text-muted/80 border-muted/20";

  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-[11px] font-semibold ${colors}`}
    >
      {label}
    </span>
  );
}
