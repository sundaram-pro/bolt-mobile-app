import React from 'react'
import { Badge } from "@/components/ui/badge"


const TemplateButtons = () => {
  return (
    <div className='flex justify-center gap-2'>
        <Badge variant="outline">Build a chess app</Badge>
        <Badge variant="outline">Create a todo app</Badge>
        <Badge variant="outline">Create a docs app</Badge>
        <Badge variant="outline">Create a weather app</Badge>

    </div>
  )
}

export default TemplateButtons