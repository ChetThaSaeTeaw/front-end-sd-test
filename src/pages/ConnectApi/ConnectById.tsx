import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import { Space , Typography , Card , Spin } from 'antd';
import axios from "axios";

const { Title } = Typography;

const { Meta } = Card;

interface AttractionData {
    id : number,
    name : string,
    detail : string,
    coverimage : string,
    latitude : number,
    longitude : number
};

export default function ConnectById({ t } : any) {

    const [ attraction , setAttraction ] = useState<AttractionData>([]);
    const { id } = useParams<{ id : string }>();

    useEffect(() => {
        axios.get(`https://www.melivecode.com/api/attractions/${id}`)
        .then((response) => {
            setAttraction(response.data.attraction);
        });

        if (!attraction) return;

    },[attraction]);


  return (
    <>
        <Helmet>
            <title>{t("app.connect_api.title")} | {t("app.etc.quiz")}</title>
        </Helmet>
        <Space direction="vertical">
            <Title
                level={2}
                style={{ padding : "24px" }}
            >
                {t("app.connect_api.title")} : {id}
            </Title>
            <Space 
                wrap
                align="start"
                size="middle"
                style={{ display : "flex" , padding : 24 }}
            >
                {!attraction ? <Spin size="large" />
                : 
                <Card
                    hoverable
                    style={{ width : 280 , margin : 10 }}
                    cover={<img alt={attraction?.name} src={attraction?.coverimage} />}
                >
                    <Meta title={attraction?.name} description={attraction?.detail} />
            </Card>
                }
            </Space>
        </Space>
    </>
  );
};
