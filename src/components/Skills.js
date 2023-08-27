import { Col, Row, Typography } from "antd";
import skills from "../items/skills";

const Skills = () => {
  return (
    <Row id="skills" className="container" justify="center">
      <Col span={24} align="center">
        <Typography.Title>Skills</Typography.Title>
        <br />
        <br />
      </Col>
      {skills.map((skill) => (
        <Col xs={12} md={4} key={skill.name} align="center">
          <img src={skill.icon} alt={skill.name} width="75px" height="75px" />
          <br />
          <Typography.Title level={5}>{skill.name}</Typography.Title>
        </Col>
      ))}
    </Row>
  );
};

export default Skills;
