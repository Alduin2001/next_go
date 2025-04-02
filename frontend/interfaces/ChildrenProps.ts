import { ReactNode } from "react";

export interface ChildrenProps{
    children:ReactNode
    className?:string
}
export interface ColumnProps extends ChildrenProps{
    col:number
}