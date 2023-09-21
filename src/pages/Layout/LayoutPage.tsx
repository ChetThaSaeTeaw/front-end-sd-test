import "./LayoutPage.scss"; // CSS

import { useState } from "react";
import { Helmet } from "react-helmet";
import { Layout , Space , Col , Row } from 'antd';

// components
import ShapeCard from "../../components/cards/ShapeCard/ShapeCard";

const { Header , Content } = Layout;

interface ShapeData {
  id : number,
  shape : string
};

const shapeData = [
  { id : 1 , shape : "squre" },{ id : 2 , shape : "circle" },{ id : 3 , shape : "oval" },{ id : 4 , shape : "trapezoid" },
  { id : 5 , shape : "rectangle" },{ id : 6 , shape : "parallelogram" }
];

export default function LayoutPage({ t } : any) {

  const [ allShape , setAllShape ] = useState(shapeData);
  const [ reverse , setReverse ] = useState<boolean>(false);

  // Suffle Function
  function handleRandom () {
    let shapeShuffle = allShape
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
    setAllShape(shapeShuffle);
  };

  // Next Function
  function handleNext () {
    let nextShape = allShape;
    nextShape.push(nextShape[0]);
    nextShape.shift();
    setAllShape([...nextShape]);
    // console.log(nextShape);
  };

  // Prev Function
  function handlePrev () {
    let prevShape = allShape;
    prevShape.unshift(prevShape[5]);
    prevShape.pop();
    setAllShape([...prevShape]);
    // console.log(prevShape);
  };

  return (
    <>
        <Helmet>
            <title>{t("app.layout.title")} | {t("app.etc.quiz")}</title>
        </Helmet>
        <Layout
            className="layout-page-container"
        >
            <Header 
              className="layout-header-box"
            >
              {t("app.layout.title")}
            </Header>
            <Layout className="layout-page-wrap">
              <Layout className="layout-page-box">
                <Content className="layout-content-box" onClick={handleNext}>
                  <ShapeCard shape="triangle-left" />
                  <span className="control-box">{t("app.layout.move_shape")}</span>
                </Content>
                <Content className="layout-content-box">
                  <Space direction="horizontal" onClick={() => setReverse(!reverse)}>
                    <ShapeCard shape="triangle-up" />
                    <ShapeCard shape="triangle-down" />
                  </Space>
                  <span className="control-box">{t("app.layout.move_position")}</span>
                </Content>
                <Content className="layout-content-box" onClick={handlePrev}>
                  <ShapeCard shape="triangle-right" />
                  <span className="control-box">{t("app.layout.move_shape")}</span>
                </Content>
              </Layout>
              <hr />
              {!reverse 
               ?
                <Row>
                  {allShape?.map((item : ShapeData , index : number) => {
                    return (
                      <Col 
                        key={index}
                        offset={index === 0 ? 6 : 0}
                        style={index === 3 ? { margin : "0px 0px 0px 200px" } : { margin : "none" }}
                      >
                        <ShapeCard shape={item.shape} handleRandom={handleRandom} />
                      </Col>
                    )
                  })}
                </Row>
               : 
                null
              }
              {reverse 
               ?
                <Row>
                  {allShape?.map((item : ShapeData , index : number) => {
                    return (
                      <Col 
                        key={index}
                        offset={index === 3 ? 6 : 0}
                        style={index === 0 ? { margin : "0px 0px 0px 100px" } : { margin : "none" }}
                      >
                        <ShapeCard shape={item.shape} handleRandom={handleRandom} />
                      </Col>
                    )
                  })}
                </Row>
               : 
                null
              }
            </Layout>
        </Layout>
    </>
  );
};
