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
      <DialogContent className="sm:max-w-2xl h-[60vh] flex flex-col">
        <DialogHeader className="shrink-0">
          <div className="flex items-center gap-2">
            <DialogTitle>{title} — Prompt</DialogTitle>
            <div className="relative">
              <button
                onClick={copy}
                className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted cursor-pointer"
                aria-label="Copy prompt"
              >
                {copied ? (
                  <svg className="h-4 w-4 text-helium-pink" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                ) : (
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg>
                )}
              </button>
              {copied && (
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-muted px-2 py-0.5 text-[10px] text-helium-pink">
                  Copied!
                </span>
              )}
            </div>
          </div>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto -mx-4 px-4">
          <p className="text-sm leading-relaxed text-foreground/80 whitespace-pre-line">
            {prompt}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
