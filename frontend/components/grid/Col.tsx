import { ColumnProps } from "@/interfaces/ChildrenProps";
import { FC } from "react";


export const Col:FC<ColumnProps> = ({children, className,col})=>{
    return(
        <div className={`w-full col-span-${col} ${className}`}>
            {children}
        </div>
    )
}