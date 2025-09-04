"use client"

import { useState } from "react"
import { Send, Bot, Wand2 } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea"
import { cn } from "@/lib/utils"

const agentOptions = [
  { id: "general", label: "General", icon: Bot },
  { id: "designer", label: "Designer", icon: Wand2 },
  { id: "coder", label: "Coder", icon: Bot },
]

export default function AIInput_07() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 56, maxHeight: 220 })
  const [value, setValue] = useState("")
  const [agent, setAgent] = useState(agentOptions[0].id)

  const CurrentIcon = agentOptions.find((a) => a.id === agent)?.icon ?? Bot

  const onSubmit = () => {
    setValue("")
    adjustHeight(true)
  }

  return (
    <div className="w-full py-4">
      <div className="max-w-xl mx-auto w-full space-y-3">
        <div className="flex items-center gap-1 rounded-full bg-black/5 dark:bg-white/5 p-1 w-fit">
          {agentOptions.map((a) => (
            <button
              key={a.id}
              onClick={() => setAgent(a.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm",
                agent === a.id ? "bg-blue-600 text-white" : "text-black/80 dark:text-white/80",
              )}
              type="button"
            >
              <a.icon className="h-3.5 w-3.5" />
              {a.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <CurrentIcon className="h-4 w-4 text-black/70 dark:text-white/70" />
            <span className="sr-only">Selected agent</span>
          </div>
          <Textarea
            aria-label="Agent composer"
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
            placeholder={`Ask the ${agentOptions.find((a) => a.id === agent)?.label}…`}
            className="pl-10 pr-12 py-4 rounded-2xl bg-black/5 dark:bg-white/5 border-none min-h-[56px] max-h-[220px] focus-visible:ring-0 focus-visible:ring-offset-0"
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
      </div>
    </div>
  )
}
