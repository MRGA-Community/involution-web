import React from 'react';
import { Icon } from '@iconify/react';



function Pomodoro() {
    return (
        <div className='flex flex-col row-span-2 bg-white p-4 text-[#96B7DA] rounded-[10px] shadow-container'>
            <div className='flex flex-row items-center gap-2'>
                <div><Icon icon='carbon:timer' className='h-6 w-6' /></div>
                <div className='text-xl '>番茄钟</div>
            </div>
            <div className='flex flex-row h-full w-full justify-items-center items-center'>
                <div className="w-content h-full flex items-center justify-center px-6">
                    <div className="radial-progress" style={{ "--value": "100" } as any}>25:00</div>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <div className='flex flex-row items-center gap-x-2'>
                        <h1>25分钟番茄钟</h1>
                        <Icon icon="carbon:arrows-horizontal" />
                    </div>
                    <button className='bg-primary text-secondary rounded-lg px-4 py-2'>开始</button>
                </div>
            </div>

        </div>
    )
}

export default Pomodoro