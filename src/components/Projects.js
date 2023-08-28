import { Col, Row, Typography } from "antd";
import projectList from "../items/projectList";
import { RiseOutlined } from "@ant-design/icons";
import CardList from "./CardList";

const Projects = () => {
  return (
    <Row id="projects" className="container" justify="center" align="middle" style={{backgroundColor: "rgba(39, 245, 68, 0.05)"}}>
      <Col span={24} align="center">
        <Typography.Title level={3} className="subTitle">
          <RiseOutlined /> Projects
        </Typography.Title>
        <CardList items={projectList} />
      </Col>
    </Row>
  );
};

export default Projects;
