import { useState , useEffect } from "react";
import { Helmet } from "react-helmet";
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

export default function ConnectApi({ t } : any) {

    const [ attractions , setAttractions ] = useState([]);

    async function getAllData () {
        const url = "https://www.melivecode.com/api/attractions";
        let response = await axios.get(url)

        if (!response.data) {
            return;
        } else {
            setAttractions(response.data);
            // console.log(response.data);
        }

        if (!attractions) return;
    }

    useEffect(() => {
        getAllData();
    },[]);

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
                {t("app.connect_api.title")}
            </Title>
            <Space 
                wrap
                align="start"
                size="middle"
                style={{ display : "flex"  , justifyContent : "center" , padding : 24 }}
            >
                {!attractions ? <Spin size="large" />
                : 
                    attractions?.map((data : AttractionData , index : number) => {
                        return (
                            <Card
                                hoverable
                                style={{ width : 280 , margin : 10 }}
                                cover={<img alt={data?.name} src={data?.coverimage} />}
                                key={index}
                                onClick={() => window.location.href = `/connectapi/${data?.id}`}
                            >
                                <Meta title={data?.name} description={data?.detail} />
                            </Card>
                        )
                    })
                }
            </Space>
        </Space>
    </>
  );
};
