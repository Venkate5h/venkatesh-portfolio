import { Col, Row, Space, Typography } from "antd";
import skills from "../items/skills";
import { SketchOutlined } from "@ant-design/icons";

const Skills = () => {
  return (
    <Row id="skills" className="container" justify="center" align="middle">
      <Col span={24} align="center">
        <Typography.Title level={3} className="subTitle">
          <SketchOutlined /> Top Skills
        </Typography.Title>
        <Row align="center" justify="center" gutter={[0, 32]}>
          {skills.map((skill) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              xxl={6}
              key={skill.name}
              align="center"
              style={{
                padding: "1vh 1vw",
              }}
            >
              <Space
                direction="vertical"
                style={{
                  padding: "4vh 2vw",
                  border: "1px solid lightgray",
                  boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)",
                  borderRadius: "10%",
                }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  width="50px"
                  height="50px"
                />
                <Typography.Text
                  level={5}
                  style={{ fontWeight: 500, fontSize: "18px" }}
                >
                  {skill.name}
                </Typography.Text>
                <Typography.Text level={5} style={{ minHeight: "50vh" }}>
                  {skill.description}
                </Typography.Text>
              </Space>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Skills;
