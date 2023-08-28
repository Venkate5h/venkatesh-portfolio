import { Col, Row, Space, Typography } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import contactList from "../items/contactList";

const Contact = () => {
  return (
    <Row
      id="contact"
      className="contactContainer"
      justify="center"
      align="middle"
    >
      <Col span={24} align="center">
        <Typography.Title level={3} className="subTitle">
          <UserAddOutlined /> Contact
        </Typography.Title>
        <Col span={24} align="center">
          <Row align="middle" justify="space-evenly" gutter={[0, 16]}>
            {contactList.map((contact) => (
              <Col xs={24} sm={8} xl={4} xxl={2} key={contact.name}>
                <Typography.Text title={contact.name}>
                  <Space align="center">
                    <img
                      src={contact.icon}
                      alt={contact.name}
                      className="contactImage"
                    />
                    <Typography.Link href={contact.profileUrl} target="_blank">
                      {contact.profileName}
                    </Typography.Link>
                  </Space>
                </Typography.Text>
              </Col>
            ))}
          </Row>
        </Col>
      </Col>
    </Row>
  );
};

export default Contact;
