import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { EyeIcon, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
const InputPassword = ({field}:any) => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='relative'>
            <Input type={!toggle ? 'password' : 'text    '} {...field} placeholder="Password (8 or more characters)" />
            <Button type='button' variant={'link'} size={'icon'} className='absolute h-[20] end-[8] top-0 bottom-0 my-auto' onClick={() => setToggle(!toggle)}>
                {!toggle ?
                    <EyeOff className='text-secondary' />
                    :
                    <EyeIcon className='text-secondary' />}
            </Button>
        </div>
    )
}

export default InputPassword