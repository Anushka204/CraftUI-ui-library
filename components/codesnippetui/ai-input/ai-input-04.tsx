"use client"

import { useState } from "react"
import { Bot, Send } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea"

const agents = [
  { id: "design", name: "Design Agent" },
  { id: "code", name: "Code Agent" },
  { id: "ops", name: "Ops Agent" },
]

export default function AIInput_04() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 44, maxHeight: 170 })
  const [agent, setAgent] = useState(agents[0].id)
  const [value, setValue] = useState("")

  const onSubmit = () => {
    setValue("")
    adjustHeight(true)
  }

  return (
    <div className="w-full py-4">
      <div className="max-w-xl mx-auto w-full space-y-3">
        <div className="flex items-center gap-2">
          {agents.map((a) => (
            <button
              key={a.id}
              onClick={() => setAgent(a.id)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm",
                agent === a.id
                  ? "bg-blue-600 text-white"
                  : "bg-black/5 dark:bg-white/5 text-black/80 dark:text-white/80",
              )}
            >
              <Bot className="h-3.5 w-3.5" />
              {a.name}
            </button>
          ))}
        </div>

        <div className="relative">
          <Textarea
            aria-label="Prompt composer"
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
            placeholder={`Ask ${agents.find((x) => x.id === agent)?.name}…`}
            className={cn(
              "rounded-none border-0 border-b border-black/15 dark:border-white/15",
              "bg-transparent px-0 pr-10 focus-visible:ring-0 focus-visible:ring-offset-0",
              "min-h-[44px] max-h-[170px]",
            )}
          />
          <button
            onClick={onSubmit}
            type="button"
            disabled={!value}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 rounded-xl p-2",
              value ? "bg-blue-600 text-white" : "bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50",
            )}
          >
            <Send className="h-4 w-4" />
          </button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {["Create a brief", "Outline next steps", "Review changes"].map((s) => (
            <button
              key={s}
              onClick={() => setValue(s)}
              className="rounded-full bg-black/5 dark:bg-white/5 px-3 py-1.5 text-sm text-black/80 dark:text-white/80"
              type="button"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
