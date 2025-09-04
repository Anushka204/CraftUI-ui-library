"use client"

import { useState } from "react"
import { Mic, Send, Figma, Sparkles } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea"

export default function AIInput_02() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 52, maxHeight: 200 })
  const [value, setValue] = useState("")

  const onSubmit = () => {
    setValue("")
    adjustHeight(true)
  }

  const suggestions = [
    "Summarize Figma file",
    "Generate component variants",
    "Write release notes",
    "Draft PR description",
  ]

  return (
    <div className="w-full py-4">
      <div className="max-w-xl mx-auto w-full space-y-3">
        <div className="relative">
          <div className="absolute left-2 top-1/2 -translate-y-1/2 rounded-xl bg-black/5 dark:bg-white/5 p-2">
            <Figma className="h-4 w-4 text-black/70 dark:text-white/70" aria-hidden />
          </div>

          <Textarea
            aria-label="AI input"
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
            placeholder="Ask the agent to help with your Figma file…"
            className={cn(
              "pl-10 pr-20 py-4 rounded-3xl bg-black/5 dark:bg-white/5",
              "text-black dark:text-white border-none",
              "placeholder:text-black/50 dark:placeholder:text-white/50",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "min-h-[52px] max-h-[200px] overflow-y-auto transition-[height] duration-100 ease-out",
            )}
          />

          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button
              className="rounded-xl bg-black/5 dark:bg-white/5 p-2"
              type="button"
              aria-label="Voice input"
              onClick={() => {}}
            >
              <Mic className="h-4 w-4 text-black/70 dark:text-white/70" />
            </button>
            <button
              onClick={onSubmit}
              type="button"
              disabled={!value}
              aria-disabled={!value}
              className={cn(
                "rounded-xl p-2 transition-colors",
                value
                  ? "bg-blue-600 text-white"
                  : "bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50 cursor-not-allowed",
              )}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setValue((prev) => (prev ? prev + " " + s : s))}
              className="inline-flex items-center gap-1 rounded-full bg-black/5 dark:bg-white/5 px-3 py-1.5 text-sm text-black/80 dark:text-white/80"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-pretty">{s}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
