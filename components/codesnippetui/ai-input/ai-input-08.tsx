"use client"

import { useState } from "react"
import { Send, Mic } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea"
import { cn } from "@/lib/utils"

export default function AIInput_08() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 44, maxHeight: 160 })
  const [value, setValue] = useState("")
  const [focused, setFocused] = useState(false)

  const onSubmit = () => {
    setValue("")
    adjustHeight(true)
    setFocused(false)
  }

  return (
    <div className="w-full py-4">
      <div className="max-w-xl mx-auto w-full">
        <div
          className={cn(
            "relative rounded-full border border-black/10 dark:border-white/10",
            "bg-background/60 backdrop-blur-sm px-4 pr-12",
          )}
        >
          <Textarea
            aria-label="Minimal composer"
            ref={textareaRef}
            value={value}
            onFocus={() => setFocused(true)}
            onBlur={() => !value && setFocused(false)}
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
            placeholder="Message the agent…"
            className="rounded-full bg-transparent border-none px-0 py-2.5 min-h-[44px] max-h-[160px] focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <div
            className={cn(
              "absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-1 transition-opacity",
              focused || value ? "opacity-100" : "opacity-0",
            )}
          >
            <button className="rounded-lg p-2 bg-black/5 dark:bg-white/5" type="button" aria-label="Voice input">
              <Mic className="h-4 w-4 text-black/70 dark:text-white/70" />
            </button>
            <button
              onClick={onSubmit}
              disabled={!value}
              type="button"
              className={cn(
                "rounded-lg p-2",
                value ? "bg-blue-600 text-white" : "bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50",
              )}
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {["Ask to simplify", "Provide examples", "Turn into tasks"].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setValue(s)}
              className="rounded-full bg-black/5 dark:bg-white/5 px-3 py-1.5 text-sm text-black/80 dark:text-white/80"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
