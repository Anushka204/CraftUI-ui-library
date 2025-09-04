"use client"

import { useState } from "react"
import { Send, MessageSquare } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea"
import { cn } from "@/lib/utils"

export default function AIInput_10() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 40, maxHeight: 200 })
  const [value, setValue] = useState("")
  const [expanded, setExpanded] = useState(false)

  const onSubmit = () => {
    setValue("")
    adjustHeight(true)
    setExpanded(false)
  }

  return (
    <div className="w-full py-4">
      <div className="max-w-xl mx-auto w-full space-y-2">
        {!expanded && !value ? (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="w-full inline-flex items-center gap-2 rounded-full bg-black/5 dark:bg-white/5 px-4 py-2 text-sm text-black/70 dark:text-white/70"
          >
            <MessageSquare className="h-4 w-4" />
            Start a prompt…
          </button>
        ) : null}

        <div
          className={cn("relative transition-all", expanded || value ? "opacity-100" : "opacity-0 pointer-events-none")}
        >
          <Textarea
            aria-label="Expandable composer"
            ref={textareaRef}
            autoFocus
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
            onBlur={() => {
              if (!value) setExpanded(false)
            }}
            placeholder="Write your idea…"
            className="rounded-2xl bg-black/5 dark:bg-white/5 border-none px-4 pr-12 py-3 min-h-[40px] max-h-[200px] focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <button
            onClick={onSubmit}
            disabled={!value}
            type="button"
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 rounded-xl p-2",
              value ? "bg-blue-600 text-white" : "bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50",
            )}
            aria-label="Send"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {["Brainstorm names", "Draft announcement", "Outline plan"].map((s) => (
            <button
              key={s}
              onClick={() => {
                setExpanded(true)
                setValue(s)
              }}
              type="button"
              className="rounded-full bg-black/5 dark:bg-white/5 px-3 py-1.5 text-sm"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
