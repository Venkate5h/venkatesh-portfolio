import { Col, Row, Space, Tag, Typography } from "antd";
import { ExportOutlined } from "@ant-design/icons";

const CardList = ({ items }) => {
  return (
    <Row align="stretch" justify="center" gutter={[0, 32]}>
      {items.map(
        ({
          name,
          description,
          icon,
          link,
          technologies = [],
          credentialLink,
          courseProvider,
          completionMonth,
        }) => (
          <Col
            xs={24}
            sm={12}
            lg={8}
            xl={8}
            xxl={6}
            key={name}
            align="center"
            className="cardContainer"
          >
            <Space direction="vertical" className="card" align="center">
              <img src={icon} alt={name} className="cardImage" />
              <Typography.Text className="cardTitle">{name}</Typography.Text>
              {technologies?.length > 0 && (
                <Row justify="center">
                  {technologies?.map((item) => (
                    <Tag key={item} style={{ marginTop: "1vh" }}>
                      {item}
                    </Tag>
                  ))}
                </Row>
              )}
              {credentialLink && (
                <Space
                  size={0}
                  direction="vertical"
                  align="start"
                  style={{ marginTop: "1vh" }}
                >
                  <Typography.Text>
                    Provider: <strong>{courseProvider}</strong>
                  </Typography.Text>
                  <Typography.Text>
                    Completion Month: <strong>{completionMonth}</strong>
                  </Typography.Text>
                  <Typography.Text>
                    Credential Url:{" "}
                    <Typography.Link href={credentialLink} target="_blank">
                      View Certificate <ExportOutlined />
                    </Typography.Link>
                  </Typography.Text>
                </Space>
              )}
              <Typography.Title level={5} className="cardDescription">
                {description}
              </Typography.Title>
              {link && (
                <Typography.Link href={link} target="_blank">
                  View Project <ExportOutlined />
                </Typography.Link>
              )}
            </Space>
          </Col>
        )
      )}
    </Row>
  );
};

export default CardList;
