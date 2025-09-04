"use client"

import { useState } from "react"
import { Command, Send, Mic } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea"

export default function AIInput_03() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 48, maxHeight: 180 })
  const [value, setValue] = useState("")

  const onSubmit = () => {
    setValue("")
    adjustHeight(true)
  }

  return (
    <div className="w-full py-4">
      <div className="max-w-xl mx-auto w-full space-y-2">
        <div
          className={cn(
            "relative rounded-2xl border border-black/10 dark:border-white/10",
            "bg-background/40 backdrop-blur-sm",
          )}
        >
          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <Command className="h-4 w-4 text-black/60 dark:text-white/60" />
            <span className="text-xs text-black/60 dark:text-white/60 hidden sm:inline">Type / for actions</span>
          </div>

          <Textarea
            aria-label="Command input"
            ref={textareaRef}
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              adjustHeight()
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                onSubmit()
              }
            }}
            placeholder="Compose a command…"
            className={cn(
              "pl-28 pr-24 py-3 rounded-2xl border-none",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "min-h-[48px] max-h-[180px] overflow-y-auto",
            )}
          />

          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 text-xs text-black/60 dark:text-white/60">
              <kbd className="rounded bg-black/5 dark:bg-white/5 px-1.5 py-0.5">Enter</kbd>
              <span>send</span>
              <span className="mx-1">•</span>
              <kbd className="rounded bg-black/5 dark:bg-white/5 px-1.5 py-0.5">Shift</kbd>
              <span>new line</span>
            </div>
            <button className="rounded-xl bg-black/5 dark:bg-white/5 p-2" type="button" aria-label="Voice input">
              <Mic className="h-4 w-4 text-black/70 dark:text-white/70" />
            </button>
            <button
              onClick={onSubmit}
              type="button"
              disabled={!value}
              className={cn(
                "rounded-xl p-2 transition-colors",
                value ? "bg-blue-600 text-white" : "bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50",
              )}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {["/summarize", "/translate", "/improve", "/outline"].map((c) => (
            <span
              key={c}
              className="text-xs rounded-full bg-black/5 dark:bg-white/5 px-2.5 py-1 text-black/70 dark:text-white/70"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
