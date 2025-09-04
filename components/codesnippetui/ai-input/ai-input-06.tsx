"use client"

import { useState } from "react"
import { Send, Sparkles } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea"
import { cn } from "@/lib/utils"

export default function AIInput_06() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 44, maxHeight: 160 })
  const [value, setValue] = useState("")

  const onSubmit = () => {
    setValue("")
    adjustHeight(true)
  }

  return (
    <div className="w-full py-4">
      <div className="max-w-xl mx-auto w-full">
        <div
          className={cn(
            "relative rounded-full bg-black/5 dark:bg-white/5 px-4 pr-14",
            "ring-1 ring-inset ring-black/10 dark:ring-white/10",
          )}
        >
          <Textarea
            aria-label="Compact composer"
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
            placeholder="Ask anything…"
            className="rounded-full bg-transparent border-none px-0 py-3 min-h-[44px] max-h-[160px] focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <button
            onClick={onSubmit}
            disabled={!value}
            type="button"
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors",
              value ? "bg-blue-600 text-white" : "bg-black/10 dark:bg-white/10 text-black/50 dark:text-white/50",
            )}
            aria-label="Send"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-2 flex items-center gap-2 text-xs text-black/60 dark:text-white/60">
          <Sparkles className="h-3.5 w-3.5" />
          Try: “Outline a design review agenda”
        </div>
      </div>
    </div>
  )
}
