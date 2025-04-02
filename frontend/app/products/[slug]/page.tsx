import { Container } from "@/components/Container"
import { Metadata } from "next"

export const metadata:Metadata = {
    title:"Продукт"
}
export default async function Product({params}:{params:{slug:string}})    
{
    
    return(
        <Container className="min-[300px]:text-xs md:text-xl">
            <h1>Категория {params.slug}</h1>
            
        </Container>
    )
}