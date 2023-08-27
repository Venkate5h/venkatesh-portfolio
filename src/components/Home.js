import { Col, Row, Space, Typography } from "antd";
import profileLogo from "../assets/profile.jpg";

const Home = () => {
  return (
    <Row id="home" className="container" justify="center" align="middle">
      <Col span={24} align="center">
        <Space direction="vertical">
          <img
            justify="center"
            align="middle"
            src={profileLogo}
            alt="profile"
            className="profile"
          />
          <Space direction="vertical">
            <Typography.Title level={1} style={{ fontWeight: 400 }}>
              Venkatesh M
            </Typography.Title>
            <Typography.Title level={4} style={{ fontWeight: 400 }}>
              Passionate{" "}
              <b style={{ color: "slateblue", opacity: 0.75 }}>
                Full Stack Developer
              </b>{" "}
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
