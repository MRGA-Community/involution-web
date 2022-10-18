import React from 'react';
import { Icon } from '@iconify/react';



function Pomodoro() {
    return (
        <div className='row-span-2 bg-white p-4 text-[#96B7DA] rounded-[10px] shadow-container'>
            <div className='flex flex-row items-center gap-2'>
                <div ><Icon icon='carbon:timer' className='h-6 w-6' /></div>
                <div className='text-xl '>番茄钟</div>
            </div>
            <div className="w-full h-full flex items-center justify-center">
            <div className="radial-progress" style={{"--value":"70"} as any}>70%</div>
            </div>
        </div>
    )
}

export default Pomodoro