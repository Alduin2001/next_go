import { ChildrenProps } from "@/interfaces/ChildrenProps"
import { FC } from "react"



export const SideBar:FC<ChildrenProps> = ({children})=>{

    return(
        <div className="flex flex-col gap-2">
            {children}
        </div>
    )
}