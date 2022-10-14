import clsx  from 'clsx'
import { Children, InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{

}

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps){
    return(
        <div className='flex items-center h-12 gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-500' >
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps{
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps){
    return(
    <Slot className='w-6 h-6 text-gray-400'>
        {props.children}
    </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

function TextInputInput(props: TextInputInputProps){

    return(
           <input className='bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400'
                {...props}
            />    
     
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}