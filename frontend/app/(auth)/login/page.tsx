import { LoginComp } from "@/components/auth/LoginComp";
import { Container } from "@/components/Container";
import { Metadata } from "next";


export const metadata:Metadata = {
    title:"Вход",
    description:"Добро пожаловать на страницу входа в нашем интернет-магазине"
}
export default function Login(){

    return(
        <Container>
            <h1>Вход</h1>
            <LoginComp/>
        </Container>
    )
}