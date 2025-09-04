"use client"

import { useState } from "react"
import { Mic, Send } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea"
import { cn } from "@/lib/utils"

export default function AIInput_09() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 56, maxHeight: 200 })
  const [value, setValue] = useState("")

  const onSubmit = () => {
    setValue("")
    adjustHeight(true)
  }

  return (
    <div className="w-full py-4">
      <div className="max-w-xl mx-auto w-full space-y-3">
        <div className="relative">
          <Textarea
            aria-label="Voice-first composer"
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
            placeholder="Hold mic to speak or type your request…"
            className={cn(
              "rounded-3xl bg-black/5 dark:bg-white/5 border-none pl-4 pr-24 py-4",
              "focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[56px] max-h-[200px] overflow-y-auto",
            )}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button
              type="button"
              aria-label="Voice input"
              className="rounded-full h-10 w-10 inline-flex items-center justify-center bg-blue-600 text-white"
            >
              <Mic className="h-4 w-4" />
            </button>
            <button
              onClick={onSubmit}
              disabled={!value}
              type="button"
              className={cn(
                "rounded-xl p-2",
                value ? "bg-blue-600 text-white" : "bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50",
              )}
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap text-sm">
          {["Summarize meeting", "Generate follow-ups", "Extract decisions"].map((x) => (
            <button
              key={x}
              onClick={() => setValue(x)}
              type="button"
              className="rounded-full bg-black/5 dark:bg-white/5 px-3 py-1.5"
            >
              {x}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
