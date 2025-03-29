import React from 'react'
import { Button } from "@/components/ui/button";

const AppBar = () => {
  return (
    <div className='flex justify-between'>
        <span>Bolty</span>
        <Button>Login</Button>
    </div>
  )
}

export default AppBar