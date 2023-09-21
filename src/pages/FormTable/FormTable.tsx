import { useState , useEffect } from "react"; // Complete Todos
import { Helmet } from "react-helmet";
import { Space , Typography } from 'antd';

// components
import FormSubmit from "../../components/FormSubmit/FormSubmit";
import TableData from "../../components/TableData/TableData";

const { Title } = Typography;

export default function FormTable({ t } : any) {

    // Complete Todos
    const [ todos , setTodos ] = useState(() => {
        const savedTodos = localStorage.getItem('todos');

        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('todos' , JSON.stringify(todos));
    },[todos]);

  return (
    <>
        <Helmet>
            <title>{t("app.form.title")} | {t("app.etc.quiz")}</title>
        </Helmet>   
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Title 
                level={2}
                style={{ padding : "24px" }}
            >
                {t("app.form.title")}
            </Title>
            <><FormSubmit t={t} todos={todos} setTodos={setTodos} /></>
            <><TableData t={t} todos={todos} setTodos={setTodos} /></>
        </Space>
    </>
  );
};
