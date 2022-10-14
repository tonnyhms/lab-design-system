import { Slot } from '@radix-ui/react-slot';
import clsx  from 'clsx'
import { ReactNode } from 'react';

export interface ButtonProps {
    size?: 'sm' | 'md'| 'lg';
    children: ReactNode;
    asChild: boolean;
}

export function Button({ size = 'md', children, asChild }: ButtonProps){
    const Comp = asChild ? Slot : 'button';

    return(
        <Comp className={clsx(
            'text-sm py-4 px-3 bg-cyan-500 rounded font-semibold text-black w-full hover:bg-cyan-600 transition-colors focus:ring-2 ring-gray-200', 
        )}>
            
            {children}
        
        </Comp>
    )
}