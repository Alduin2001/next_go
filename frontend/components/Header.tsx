import { Button, Input, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import Link from "next/link"
import style from './Header.module.css';

export const Header = ()=>{

    return(
        <header className="p-2 transition shadow-xl hover:shadow-2xl flex justify-between items-center flex-wrap min-[300px]:text-xs md:text-xl">
            <a href="/">Logo</a>

            <nav className="flex flex-wrap gap-2">
                <Menu>
                    <MenuButton className={`text-[#eee] add_arrow bg-blue-700 p-2 rounded-md cursor-pointer ${style.add_arrow}`}>Основные</MenuButton>
                    <MenuItems anchor="bottom start" className="flex flex-col cursor-pointer">
                        <MenuItem as={Link} href="/" className={`text-[#eee] bg-blue-700 transition hover:bg-blue-800 p-2 rounded-md cursor-pointer`}>Главная</MenuItem>
                        <MenuItem as={Link} href="/products" className={`text-[#eee] bg-blue-700 transition hover:bg-blue-800 p-2 rounded-md cursor-pointer`}>Наши товары</MenuItem>
                    </MenuItems>
                </Menu>
                <Menu>
                    <MenuButton className={`text-[#eee] add_arrow bg-blue-700 p-2 rounded-md cursor-pointer ${style.add_arrow}`}>Регистрация и вход</MenuButton>
                    <MenuItems anchor="bottom start" className="flex flex-col cursor-pointer">
                        <MenuItem as={Link} href="/register" className={`text-[#eee] bg-blue-700 transition hover:bg-blue-800 p-2 rounded-md cursor-pointer`}>Регистрация</MenuItem>
                        <MenuItem as={Link} href="/login" className={`text-[#eee] bg-blue-700 transition hover:bg-blue-800 p-2 rounded-md cursor-pointer`}>Вход</MenuItem>
                    </MenuItems>
                </Menu>
                <Menu>
                    <MenuButton className={`text-[#eee] add_arrow bg-blue-700 p-2 rounded-md cursor-pointer ${style.add_arrow}`}>Личный кабинет</MenuButton>
                    <MenuItems anchor="bottom start" className="flex flex-col cursor-pointer">
                        <MenuItem as={Link} href="/dashboard" className={`text-[#eee] bg-blue-700 transition hover:bg-blue-800 p-2 rounded-md cursor-pointer`}>Профиль</MenuItem>
                        <MenuItem as={Link} href="/login" className={`text-[#eee] bg-blue-700 transition hover:bg-blue-800 p-2 rounded-md cursor-pointer`}>Выход</MenuItem>
                    </MenuItems>
                </Menu>
                <form className="flex gap-2 items-center">
                <Input type="text" className={`p-2 border-b-2 border-green-600 outline-none`} placeholder="Введите для поиска"/>
                <Button className={`bg-green-500 rounded-md text-[#eee] transition hover:bg-green-700 cursor-pointer p-2`}>Поиск</Button>
            </form>
            </nav>
        </header>
    )
}