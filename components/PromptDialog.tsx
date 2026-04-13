"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PromptDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  prompt: string;
  title: string;
}

export default function PromptDialog({
  open,
  onOpenChange,
  prompt,
  title,
}: PromptDialogProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-[#161616] border-white/10 gap-3">
        <DialogHeader>
          <DialogTitle className="text-helium-cream text-sm">
            {title} — Prompt
          </DialogTitle>
        </DialogHeader>

        <div className="max-h-80 overflow-y-auto rounded-lg bg-[#111] p-3 font-mono text-xs leading-relaxed text-helium-cream/60 whitespace-pre-line">
          {prompt}
        </div>

        <button
          onClick={copy}
          className="inline-flex items-center gap-1.5 self-end rounded-full bg-helium-pink/15 px-4 py-1.5 text-xs font-semibold text-helium-pink transition-all hover:bg-helium-pink/25"
        >
          {copied ? (
            <>
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              Copied
            </>
          ) : (
            <>
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg>
              Copy Prompt
            </>
          )}
        </button>
      </DialogContent>
    </Dialog>
  );
}
