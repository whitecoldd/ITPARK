import React, { useState } from "react";
import "./about.css";
import { Container, Image } from "react-bootstrap";
import topArrow from "../../assets/topArrow.svg";
import ITUAward from "../../assets/ITUAward.svg";
import PINAward from "../../assets/PINAward.svg";
import reportLogo from "../../assets/reportLogo.svg";
import reportPic from "../../assets/reportPic.svg";

const arr = [
  {
    id: 1,
    img: reportLogo,
    text: "text",
  },
  {
    id: 2,
    img: reportLogo,
    text: "text",
  },
  {
    id: 3,
    img: reportLogo,
    text: "text",
  },
  {
    id: 4,
    img: reportLogo,
    text: "text",
  },
  {
    id: 5,
    img: reportLogo,
    text: "text",
  },
  {
    id: 6,
    img: reportLogo,
    text: "text",
  },
  {
    id: 7,
    img: reportLogo,
    text: "text",
  },
  {
    id: 8,
    img: reportLogo,
    text: "text",
  },
  {
    id: 9,
    img: reportLogo,
    text: "text",
  },
  {
    id: 10,
    img: reportLogo,
    text: "text",
  },
  {
    id: 11,
    img: reportLogo,
    text: "text",
  },
  {
    id: 12,
    img: reportLogo,
    text: "text",
  },
];

const arr1 = [
  {
    id: 1,
    title: "Договор осуществлении деятельности в MITP – образец",
  },
  {
    id: 2,
    title: "Квартальный отчет",
  },
  {
    id: 3,
    title: "Годовая проверка",
  },
  {
    id: 4,
    title: "Резидентский взнос",
  },
  {
    id: 5,
    title: "Договор осуществлении деятельности в MITP – образец",
  },
  {
    id: 6,
    title: "Квартальный отчет",
  },
  {
    id: 7,
    title: "Годовая проверка",
  },
  {
    id: 8,
    title: "Резидентский взнос",
  },
];
const arr2 = [
  {
    id: 1,
    title: "РЕЗИДЕНТСКИЙ ВЗНОС",
    text: "Оплачивается ежемесечно в соответствии с контрактом",
  },
  {
    id: 2,
    title: "КВАРТАЛЬНЫЙ ОТЧЕТ",
    text: "Сдается до 25 числа месяца, следующего за отчетном периодом",
  },
  {
    id: 3,
    title: "ГОДОВАЯ ПРОВЕРКА",
    text: "Сдается до 30 апреля, после закрытия финансового года",
  },
  {
    id: 4,
    title: "РЕЗИДЕНТСКИЙ ВЗНОС",
    text: "Оплачивается ежемесечно в соответствии с контрактом",
  },
  {
    id: 5,
    title: "КВАРТАЛЬНЫЙ ОТЧЕТ",
    text: "Сдается до 25 числа месяца, следующего за отчетном периодом",
  },
  {
    id: 6,
    title: "ГОДОВАЯ ПРОВЕРКА",
    text: "Сдается до 30 апреля, после закрытия финансового года",
  },
  {
    id: 7,
    title: "РЕЗИДЕНТСКИЙ ВЗНОС",
    text: "Оплачивается ежемесечно в соответствии с контрактом",
  },
  {
    id: 8,
    title: "КВАРТАЛЬНЫЙ ОТЧЕТ",
    text: "Сдается до 25 числа месяца, следующего за отчетном периодом",
  },
];

const About = () => {
  const [Vision, setVision] = useState(false)
  const ShowContent = () => {
    setVision(!Vision)
  }
  const [Vision1, setVision1] = useState(false)
  const ShowContent1 = () => {
    setVision1(!Vision1)
  }
  const [Vision2, setVision2] = useState(false)
  const ShowContent2 = () => {
    setVision2(!Vision2)
  }
  const [Vision3, setVision3] = useState(false)
  const ShowContent3 = () => {
    setVision3(!Vision3)
  }
  return (
    <>
      <Container className="topBlog">
        <Image className="img-st" src={topArrow}></Image>
        <Container className="topRightBlog ">
          <h2>О нас</h2>
          <p>
            “Gagauzia IT Park” является основным центром доступа к лучшим
            услугам и стимулам в секторе ИТ. Парк доказал свою уникальность,
            являясь виртуальной структурой, действующей в рамках модели
            управления с участием многих заинтересованных сторон.
          </p>

          <p>
            Наша миссия заключается в том, чтобы выступать в качестве
            катализатора инвестиций в ИТ-сектор посредством продвижения гибкой
            государственной политики в ИТ индустрии, создания условий,
            способствующих инновациям в области ИКТ и цифровой трансформации
            экономики с помощью устойчивого ИТ-сектора, который способен открыть
            новые возможности.
          </p>

          <p>
            Выступая в качестве фасилитатора кластера, Парк предоставляет
            организационную платформу с набором инновационных инструментов и
            новых подходов для согласованного ускорения трансформации экономики,
            оптимизируя корпоративную инновационную практику, стимулируя рост ИТ
            индустрии, поддерживая партнерское взаимодействие, создавая новые
            рабочие места и привлекая национальные и иностранные инвестиции.
          </p>

          <p>
            Мы повышаем региональную конкурентоспособность молдавского
            ИТ-сектора за счет значительного снижения налогового бремени путем
            введения единого налога в размере 7% от дохода от продаж, облегчения
            иммиграционного оформления иностранных специалистов, сокращения
            бюрократических барьеров и, конечно же, виртуального присутствия.
          </p>
        </Container>
      </Container>
      <Container fluid className="awards">
        <h2>Награды</h2>
        <div className="img-connect">
          <div className="img1-connect">
            <Image className="img1" src={ITUAward} />
            <h4 className="bold">ITU Award</h4>
          </div>
          <div className="line"></div>
          <div className="img1-connect1">
            <Image className="img2" src={PINAward} />
            <h4 className="bold">PIN Award</h4>
          </div>
        </div>
        <Container>
          <h2>Сопутствующие ссылки:</h2>
          <div className="list">
            <p className="list-el">
              <a className="white">
                Закон №77 от 21.04.2016
              </a>{" "}
              об информационно-технологических парках
            </p>

            <p className="list-el">
              <a className="white">
                Постановление Правительства №1144 от 20.12.2017
              </a>{" "}
              о создании информационно-технологического парка “Gagauzia IT
              Park”
            </p>

            <p className="list-el">
              <a className="white">
                Постановление об организации и функционировании
              </a>{" "}
              информационно-технологического парка “Gagauzia IT Park”
            </p>

            <p className="list-el">
              <a className="white">
                Налоговый Кодекс Республики Молдова (Глава Х)
              </a>
            </p>

            <p className="list-el">
              <a className="white">
                Закон № 200 от 16.07.2010
              </a>{" "}
              о режиме иностранцев в Республике Молдова
            </p>

            <p className="list-el">
              <a className="white">
                Постановление Правительства № 1143 от 20.12.2017
              </a>{" "}
              об утверждении Положения об оценке деятельности
              информационно-технологических парков
            </p>
          </div>
        </Container>
      </Container>
      <Container>
        <h2 className="report-header">Отчеты парка</h2>
        <Container className="report-cont m-0 p-0">
          {Vision2 ? <> {arr.slice(0, 12).map((array) => (
            <Container className="report-card">
              <Image className="report-img" src={array.img} />
              <div className="d-flex align-items-center">
                <h3 className="text-uppercase">{array.text}</h3>
              </div>
            </Container>
          ))}</> : <> {arr.slice(0, 6).map((array) => (
            <Container className="report-card">
              <Image className="report-img" src={array.img} />
              <div className="d-flex align-items-center">
                <h3 className="text-uppercase">{array.text}</h3>
              </div>
            </Container>

          ))} </>}

        </Container>
        <div className="d-flex justify-content-center w-100 pb-4">
          <button className="btn2" onClick={ShowContent2}>Показать еще...</button>
        </div>
      </Container>
      <Container>
        <h2 className="report-header">Внешняя отчетность</h2>
        <Container className="report-cont m-0 p-0">
          {Vision3 ? <> {arr.slice(0, 12).map((array) => (
            <Container className="report-card">
              <Image className="report-img" src={array.img} />
              <div className="d-flex align-items-center">
                <h3 className="text-uppercase">{array.text}</h3>
              </div>
            </Container>
          ))}</> : <> {arr.slice(0, 6).map((array) => (
            <Container className="report-card">
              <Image className="report-img" src={array.img} />
              <div className="d-flex align-items-center">
                <h3 className="text-uppercase">{array.text}</h3>
              </div>
            </Container>
          ))} </>}
        </Container>
        <div className="d-flex justify-content-center w-100 pb-4">
          <button className="btn2" onClick={ShowContent3}>Показать еще...</button>
        </div>
      </Container>
      <Container>
        <h2 className="report-header">Полезные документы</h2>
        <Container className="report-cont1 m-0 p-0">
          {Vision ? <> {arr1.slice(0, 8).map((array1) => (
            <Container className="doc-card">
              <div className="d-flex align-items-center">
                <h3 className="">{array1.title}</h3>
              </div>
              <div className="line1"></div>
              <div className="btn-box">
                <button className="btn1">СКАЧАТЬ</button>
                <button className="btn1">СКАЧАТЬ</button>
              </div>
            </Container>
          ))}</> : <> {arr1.slice(0, 4).map((array1) => (
            <Container className="doc-card">
              <div className="d-flex align-items-center">
                <h3 className="">{array1.title}</h3>
              </div>
              <div className="line1"></div>
              <div className="btn-box">
                <button className="btn1">СКАЧАТЬ</button>
                <button className="btn1">СКАЧАТЬ</button>
              </div>
            </Container>
          ))}</>}
        </Container>

        <button className="btn2" onClick={ShowContent}>Показать еще...</button>
      </Container>
      <Container>
        <h2 className="report-header">Обязательства резидентов</h2>
        <Container className="doc-cont m-0 p-0">
          {Vision1 ? <> {arr2.slice(0, 8).map((array2) => (
            <Container className="doc-card1">
              <div className="d-flex align-items-center">
                <h3 className="">{array2.title}</h3>
              </div>
              <div className="line2"></div>
              <div className="more">
                <h5 className="">{array2.text}</h5>
                <button className="btn3">Подробнее</button>
              </div>
            </Container>
          ))}</> : <> {arr2.slice(0, 3).map((array2) => (
            <Container className="doc-card1">
              <div className="d-flex align-items-center">
                <h3 className="">{array2.title}</h3>
              </div>
              <div className="line2"></div>
              <div className="more">
                <h5 className="">{array2.text}</h5>
                <button className="btn3">Подробнее</button>
              </div>
            </Container>
          ))} </>}
        </Container>
        <button className="btn2 mb-3" onClick={ShowContent1}>Показать еще...</button>
      </Container>
    </>
  );
};

export default About;
