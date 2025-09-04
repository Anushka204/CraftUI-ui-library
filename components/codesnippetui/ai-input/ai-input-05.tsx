"use client"

import { useState } from "react"
import { Paperclip, ImageIcon, Figma, Send } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea"
import { cn } from "@/lib/utils"

export default function AIInput_05() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 56, maxHeight: 220 })
  const [value, setValue] = useState("")

  const onSubmit = () => {
    setValue("")
    adjustHeight(true)
  }

  const addText = (t: string) => setValue((v) => (v ? `${v} ${t}` : t))

  return (
    <div className="w-full py-4">
      <div className="max-w-xl mx-auto w-full space-y-3">
        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center gap-2 rounded-lg bg-black/5 dark:bg-white/5 px-3 py-1.5 text-sm"
            onClick={() => addText("[Attach spec.pdf]")}
            type="button"
          >
            <Paperclip className="h-4 w-4" /> Attach
          </button>
          <button
            className="inline-flex items-center gap-2 rounded-lg bg-black/5 dark:bg-white/5 px-3 py-1.5 text-sm"
            onClick={() => addText("[Insert screenshot.png]")}
            type="button"
          >
            <ImageIcon className="h-4 w-4" /> Image
          </button>
          <button
            className="inline-flex items-center gap-2 rounded-lg bg-black/5 dark:bg-white/5 px-3 py-1.5 text-sm"
            onClick={() => addText("[Link Figma file]")}
            type="button"
          >
            <Figma className="h-4 w-4" /> Figma
          </button>
        </div>

        <div className="relative">
          <Textarea
            aria-label="Prompt composer with toolbar"
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
            placeholder="Describe what you want the agent to do…"
            className={cn(
              "rounded-2xl bg-black/5 dark:bg-white/5 border-none pl-4 pr-12 py-4",
              "focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[56px] max-h-[220px] overflow-y-auto",
            )}
          />
          <button
            onClick={onSubmit}
            type="button"
            disabled={!value}
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 rounded-xl p-2",
              value ? "bg-blue-600 text-white" : "bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50",
            )}
          >
            <Send className="h-4 w-4" />
          </button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {["Summarize attachments", "Generate alt text", "Create handoff checklist"].map((x) => (
            <button
              key={x}
              onClick={() => addText(x)}
              type="button"
              className="rounded-full bg-black/5 dark:bg-white/5 px-3 py-1.5 text-sm"
            >
              {x}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
