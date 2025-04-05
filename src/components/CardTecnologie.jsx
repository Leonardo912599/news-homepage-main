import React from 'react'

const CardTecnologie = ({title,subtitle,content,ruta}) => {
    return (
        <div className='flex flex-row items-center justify-center mb-5'>
            <img className='w-[100px] h-[150px]' src={`${ruta}`}/>
            <div className='flex flex-col items-start p-6'>
                <p className='text-lg text-red-500'>{title}</p>
                <p className='text-black font-bold'>{subtitle}</p>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default CardTecnologie
