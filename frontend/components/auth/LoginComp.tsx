'use client'
import { createUserDto } from "@/interfaces/dto/User";
import { Button, Input } from "@headlessui/react";
import { FC } from "react";
import {useForm} from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchemaValid } from "@/config/validations/user.schema";
import { Row } from "../grid/Row";
import { Col } from "../grid/Col";
import Link from "next/link";

export const LoginComp:FC = ()=>{
    const {register,handleSubmit,reset,formState:{errors}} = useForm<createUserDto>({
        resolver:yupResolver(userSchemaValid)
    });
    const submitForm = (data:createUserDto)=>{
        console.log(data);
        reset();
    }
    return(
        <form className="w-4/5" onSubmit={handleSubmit(submitForm)}>
            <div className="my-2">
            <Input {...register('email')} placeholder="Введите почту" className="outline-none border-b-2 border-green-500 focus:shadow-md w-full"/>
            {errors.email?.message && (<p className="text-red-500 italic mt-2">*{errors.email.message}</p>)}
            </div>
            <div className="my-2">
            <Input type="password" {...register('password')} placeholder="Введите имя" className="outline-none border-b-2 border-green-500 focus:shadow-md w-full"/>
            {errors.password?.message && (<p className="text-red-500 italic mt-2">*{errors.password.message}</p>)}
            </div>
            <Row>
                <Col col={6}>
                    <Button type="submit" className="rounded-md cursor-pointer w-full p-2 bg-green-500 text-[#eee]">Войти</Button>
                </Col>
                <Col col={6}>
                    <Button className="rounded-md w-full p-2 bg-red-500 text-[#eee]">Очистить</Button>
                </Col>
            </Row>
            <p className="mt-2">У вас нет аккаунта? <Link href="/auth/register" className="text-blue-500">Зарегистрироваться</Link></p>
        </form>
    )
}