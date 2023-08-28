import { Col, Row, Typography } from "antd";
import projects from "../items/projectItems";
import { RiseOutlined } from "@ant-design/icons";
import CardList from "./CardList";

const Projects = () => {
  return (
    <Row id="projects" className="container" justify="center" align="middle">
      <Col span={24} align="center">
        <Typography.Title level={3} className="subTitle">
          <RiseOutlined /> Projects
        </Typography.Title>
        <CardList items={projects} />
      </Col>
    </Row>
  );
};

export default Projects;
