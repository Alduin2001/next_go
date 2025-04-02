import { ChildrenProps } from "@/interfaces/ChildrenProps";
import { FC } from "react";


export const Row:FC<ChildrenProps> = ({children,className})=>{

    return(
        <div className={`grid grid-cols-12 gap-2 ${className}`}>
            {children}
        </div>
    )
}