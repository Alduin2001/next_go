import { ChildrenProps } from "@/interfaces/ChildrenProps";
import { FC } from "react";


export const Card:FC<ChildrenProps> = ({children,className})=>{

    return(
        <div className={`w-full p-2 flex flex-col ${className}`}>
            {children}
        </div>
    )
}