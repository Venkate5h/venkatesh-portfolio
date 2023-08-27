import { Col, Row, Space, Typography } from "antd";
import profileLogo from "../assets/profile.jpg";

const Home = () => {
  return (
    <Row id="home" className="container" justify="center" align="middle">
      <Col span={24} align="center">
        <Space direction="vertical">
          <img alt="profile" src={profileLogo} className="profile" />
          <Space direction="vertical">
            <Typography.Title level={1} className="profileName">
              Venkatesh M
            </Typography.Title>
            <Typography.Title level={4} className="profileDescription">
              Passionate{" "}
              <strong className="highlight">Full Stack Developer</strong>{" "}
              crafting seamless web experiences <br />
              through innovative front-end designs and robust back-end solutions
            </Typography.Title>
          </Space>
        </Space>
      </Col>
    </Row>
  );
};

export default Home;
