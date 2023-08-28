import { Col, Row, Typography } from "antd";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import CardList from "./CardList";
import certificationList from "../items/certificationList";

const Certifications = () => {
  return (
    <Row
      id="certifications"
      className="container"
      justify="center"
      align="middle"
      style={{ backgroundColor: "rgba(39, 245, 239, 0.05)" }}
    >
      <Col span={24} align="center">
        <Typography.Title level={3} className="subTitle">
          <SafetyCertificateOutlined /> Certifications
        </Typography.Title>
        <CardList items={certificationList} />
      </Col>
    </Row>
  );
};

export default Certifications;
