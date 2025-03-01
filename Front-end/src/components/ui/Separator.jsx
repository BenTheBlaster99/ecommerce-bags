import React from 'react';
import * as SeparatorPrimitive from "@radix-ui/react-separator"


const Separator = React.forwardRef(
    (
        <SeparatorPrimitive.Root
            ref={ref}
            decorative={decorative}
            orientation= {orientation}
            
            
            
        />
    )
)
Separator.displayName = SeparatorPrimitive.Root.displayName
export  {Separator};