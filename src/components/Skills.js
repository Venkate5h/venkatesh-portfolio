import { Col, Row, Typography } from "antd";
import skillList from "../items/skillList";
import { SketchOutlined } from "@ant-design/icons";
import CardList from "./CardList";

const Skills = () => {
  return (
    <Row id="skills" className="container" justify="center" align="middle" style={{backgroundColor: "rgba(39, 245, 239, 0.05)"}}>
      <Col span={24} align="center">
        <Typography.Title level={3} className="subTitle">
          <SketchOutlined /> Top Skills
        </Typography.Title>
        <CardList items={skillList} />
      </Col>
    </Row>
  );
};

export default Skills;
