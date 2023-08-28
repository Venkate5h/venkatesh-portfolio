import { Col, Row, Typography } from "antd";
import skills from "../items/skillItems";
import { SketchOutlined } from "@ant-design/icons";
import CardList from "./CardList";

const Skills = () => {
  return (
    <Row id="skills" className="container" justify="center" align="middle">
      <Col span={24} align="center">
        <Typography.Title level={3} className="subTitle">
          <SketchOutlined /> Top Skills
        </Typography.Title>
        <CardList items={skills} />
      </Col>
    </Row>
  );
};

export default Skills;
