import { Container } from "@/components/Container";
import { Row } from "@/components/grid/Row";
import { Col } from "@/components/grid/Col";
import { Metadata } from "next";
import { SideBar } from "@/components/SideBar";
import { Disclosure, DisclosureButton, DisclosurePanel, Button } from "@headlessui/react";
export const metadata: Metadata = {
    title: "Наши товары",
    description: "Наши товары"
}

export default function Products() {


    return (
        <Container className="min-[300px]:text-xs md:text-xl">
            <h1>Наши товары</h1>

            <Row>
                <Col>
                    <SideBar>
                        <Disclosure defaultOpen>
                            <DisclosureButton className="border-2 border-gray-100 p-2 cursor-pointer">Категория</DisclosureButton>
                            <DisclosurePanel className="flex flex-col gap-1 items-start" >
                                <Button className="border-2 border-gray-100 p-2 cursor-pointer transition hover:shadow-2xl">Macbook</Button>
                                <Button className="border-2 border-gray-100 p-2 cursor-pointer transition hover:shadow-2xl">Imac</Button>
                                <Button className="border-2 border-gray-100 p-2 cursor-pointer transition hover:shadow-2xl">Iphone</Button>
                                <Button className="border-2 border-gray-100 p-2 cursor-pointer transition hover:shadow-2xl">AirPods</Button>
                            </DisclosurePanel>
                        </Disclosure>
                        <hr />
                        <Disclosure>
                            <DisclosureButton className="border-2 border-gray-100 p-2 cursor-pointer">SSD</DisclosureButton>
                            <DisclosurePanel className="flex flex-col gap-1 items-start" >
                                <Button className="border-2 border-gray-100 p-2 cursor-pointer transition hover:shadow-2xl">128gb</Button>
                                <Button className="border-2 border-gray-100 p-2 cursor-pointer transition hover:shadow-2xl">256gb</Button>
                                <Button className="border-2 border-gray-100 p-2 cursor-pointer transition hover:shadow-2xl">512gb</Button>
                                <Button className="border-2 border-gray-100 p-2 cursor-pointer transition hover:shadow-2xl">1024gb</Button>
                            </DisclosurePanel>
                        </Disclosure>
                    </SideBar>
                </Col>

                <Col>
                    <h1>sg</h1>
                </Col>
            </Row>
        </Container>
    )
}

