import { Col, Row, Space, Tag, Typography } from "antd";
import projects from "../items/projects";
import { SketchOutlined, LinkOutlined } from "@ant-design/icons";

const Projects = () => {
  return (
    <Row id="projects" className="container" justify="center" align="middle">
      <Col span={24} align="center">
        <Typography.Title level={3} className="subTitle">
          <SketchOutlined /> Projects
        </Typography.Title>
        <Row align="center" justify="space-evenly" gutter={[0, 32]}>
          {projects.map((project) => (
            <Col
              xs={24}
              sm={8}
              key={project.name}
              align="center"
              style={{
                padding: "4vh 1vw",
              }}
            >
              <Space
                direction="vertical"
                style={{
                  padding: "4vh 2vw",
                  border: "1px solid lightgray",
                  boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)",
                  borderRadius: "2vh",
                }}
              >
                <img
                  src={project.icon}
                  alt={project.name}
                  width="150px"
                  height="150px"
                />

                <Typography.Title level={4}>{project.name}</Typography.Title>
                <Row justify={"center"}>
                  {project?.technologies?.map((item) => (
                    <Tag key={item} style={{ marginTop: "1vh" }}>
                      {item}
                    </Tag>
                  ))}
                </Row>
                <Typography.Text level={5} style={{ fontWeight: 400 }}>
                  {project.description}
                </Typography.Text>
                <Typography.Link>
                  View Project <LinkOutlined />
                </Typography.Link>
              </Space>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Projects;
