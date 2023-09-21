import "./MenuCard.scss"; // CSS

import { Card } from 'antd';
import { Link } from 'react-router-dom';

export default function MenuCard({ data , t } : any ) {
  return (
    <Link 
        to={data.linkTo}
    >
      <Card 
        title={`${t("app.home.quiz")} ${data.id}`}  
        size="small"
        className="home-menu-card-box"
      >
        <p>{data.title}</p>
      </Card>
    </Link>
  );
};
