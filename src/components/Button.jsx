import React from 'react'

const Button = (props) => {
    return (
        <button id={props.id} className={`${props?.containerClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black`}>
            {props.leftIcon}

            <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
                <div>
                    {props.title}
                </div>
                {props.rightIcon}
            </span>
        </button>
    )
}

export default Button
