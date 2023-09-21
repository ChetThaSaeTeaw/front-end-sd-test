import "./Home.scss"; // CSS

import React from 'react';
import { Helmet } from "react-helmet";
import { Layout, Space } from 'antd';

// components
import MenuCard from "../../components/cards/MenuCard/MenuCard";

interface MenuLists {
    id : number,
    title : string,
    linkTo : string
};

export default function Home({ t } : any) {

    // Menu Data
    const menuLists = [
        {
            id : 1,
            title : t("app.home.quiz_1"),
            linkTo : "/layout"
        },{
            id : 2,
            title : t("app.home.quiz_2"),
            linkTo : "/connectapi"
        },{
            id : 3,
            title : t("app.home.quiz_3"),
            linkTo : "/form"
        },
    ];

  return (
    <>
        <Helmet>
            <title>Swift Dynamics Quiz</title>
        </Helmet>
        <Layout
            className="home-page-container"
        >
            <Space 
                className="home-page-wrap"
                size="large"
            >
                {menuLists.map(( menu : MenuLists , index : number ) => {
                    return (
                        <React.Fragment key={index}>
                            <MenuCard data={menu} t={t} />
                        </React.Fragment>
                    )
                })}
            </Space>
        </Layout>
    </>
  );
};
