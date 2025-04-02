import { Card } from "@/components/card/Card";
import { Container } from "@/components/Container";
import { Col } from "@/components/grid/Col";
import { Row } from "@/components/grid/Row";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:"Главная",
  description:"Добро пожаловать на главную страницу"
}

export default function Home() {
  return (
    <Container>
      {/* Приветственная секция */}
      <section className="shadow-2xl p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 mb-8">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-4">
          Добро пожаловать на главную страницу!
        </h1>
        <p className="text-lg text-gray-600 text-center leading-relaxed max-w-2xl mx-auto">
          Рады, что вы выбрали наш интернет-магазин. У нас вы найдёте богатый 
          ассортимент оригинальной техники Apple. Надеемся, вы подберёте 
          именно то, что искали.
        </p>
      </section>

      {/* Секция услуг */}
      <section className="shadow-lg mt-8 p-6 bg-white rounded-xl">
        <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6 pb-4 border-b-2 border-gray-100">
          Наши услуги
        </h1>
        
        <Row className="mt-4 gap-4">
          <Col col={4}>
            <Card className="border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
              <div className="text-center">
                <div className="mb-4 inline-block p-4 bg-blue-100 rounded-full">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Подбор техники</h2>
                <p className="text-gray-600">Профессиональный подбор оптимальной конфигурации</p>
              </div>
            </Card>
          </Col>

          <Col col={4}>
            <Card className="border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
              <div className="text-center">
                <div className="mb-4 inline-block p-4 bg-green-100 rounded-full">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Обратная связь</h2>
                <p className="text-gray-600">Круглосуточная поддержка и консультации</p>
              </div>
            </Card>
          </Col>

          <Col col={4}>
            <Card className="border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
              <div className="text-center">
                <div className="mb-4 inline-block p-4 bg-purple-100 rounded-full">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Быстрая доставка</h2>
                <p className="text-gray-600">Экспресс-доставка по всему городу за 2 часа</p>
              </div>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
}