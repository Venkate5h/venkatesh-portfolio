import { Col, Row, Space, Tag, Typography } from "antd";
import { LinkOutlined } from "@ant-design/icons";

const CardList = ({ items }) => {
  return (
    <Row align="middle" justify="center" gutter={[0, 32]}>
      {items.map(({ name, description, icon, link, technologies = [] }) => (
        <Col
          xs={24}
          sm={12}
          md={8}
          xxl={6}
          key={name}
          align="center"
          className="cardContainer"
        >
          <Space direction="vertical" className="card">
            <img src={icon} alt={name} className="cardImage" />
            <Typography.Text className="cardTitle">{name}</Typography.Text>
            {technologies?.length > 0 && (
              <Row justify={"center"}>
                {technologies?.map((item) => (
                  <Tag key={item} style={{ marginTop: "1vh" }}>
                    {item}
                  </Tag>
                ))}
              </Row>
            )}
            <Typography.Text>{description}</Typography.Text>
            {link && (
              <Typography.Link href={link} target="_blank">
                View Project <LinkOutlined />
              </Typography.Link>
            )}
          </Space>
        </Col>
      ))}
    </Row>
  );
};

export default CardList;
