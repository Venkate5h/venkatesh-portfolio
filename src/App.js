import { Anchor, Avatar, Col, Layout, Row, Space, Typography } from "antd";
import profilePhoto from "./assets/profile.jpg";
import items from "./items/navigationList";
import "./App.css";

const { Content, Header } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Row align="middle" justify="space-evenly" className="parentFull">
          <Col xs={0} sm={0} md={12}>
            <Space>
              <Avatar src={profilePhoto} />
              <Typography.Link href="#home" className="appLink">
                Venkatesh's Portfolio
              </Typography.Link>
            </Space>
          </Col>
          <Anchor
            affix={false}
            items={items}
            className="anchor"
            direction="horizontal"
          />
        </Row>
      </Header>
      <Content>
        {items.map((item) => (
          <item.component key={item.key} />
        ))}
      </Content>
    </Layout>
  );
}

export default App;
