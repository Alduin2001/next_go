import { Col } from "@/components/grid/Col";
import { Row } from "@/components/grid/Row";
import { SideBar } from "@/components/SideBar";
import { ReactNode } from "react";


export default function DashboardLayout({children}:Readonly<{children:ReactNode}>){

    return(
        <html>
            <body>
                <Row>
                    <Col col={2}>
                        <SideBar>
                            <h1>dgg</h1>
                        </SideBar>
                    </Col>
                    <Col col={10}>
                {children}
                </Col>
                </Row>

            </body>
        </html>
    )

}