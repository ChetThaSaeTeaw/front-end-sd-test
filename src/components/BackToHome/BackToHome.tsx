import { Link } from "react-router-dom";
import { Button } from "antd";

export default function BackToHome({ t } : any) {
  return (
    <Link 
        to="/"
        style={{ position : "fixed" , top : "7%" , right : "2%" , zIndex : 90 }}
    >
        <Button>{t("app.home.back")}</Button>
    </Link>
  );
};
