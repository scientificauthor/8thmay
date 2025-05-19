import React from 'react'
import { Separator } from '@/components/ui/separator';

const CustomDivider = (props:any) => {
    return (
        <div className='relative'>
            <Separator />
            <span className='text-secondary text-sm sm:text-[16px] absolute start-0 end-0 m-auto w-fit top-[-12px] bg-white px-2'>{props.text}</span>
        </div>
    )
}

export default CustomDivider