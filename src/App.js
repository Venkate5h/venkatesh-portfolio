import { Anchor, Avatar, Col, Layout, Row, Space, Typography } from "antd";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import profilePhoto from "./assets/profile_photo.jpg";
import "./App.css";

const { Content, Header } = Layout;

const items = [
  { key: "home", href: "#home", title: "Home", component: Home },
  { key: "skills", href: "#skills", title: "Skills", component: Skills },
  {
    key: "projects",
    href: "#projects",
    title: "Projects",
    component: Projects,
  },
  {
    key: "certifications",
    href: "#certifications",
    title: "Certifications",
    component: Certifications,
  },
  { key: "contact", href: "#contact", title: "Contact", component: Contact },
];

function App() {
  return (
    <Layout>
      <Header>
        <Row align="middle" justify="space-between">
          <Col xs={0} md={12}>
            <Space>
              <Avatar src={profilePhoto} />
              <Typography.Link href="#home" className="appLink">
                Venkatesh's Portfolio
              </Typography.Link>
            </Space>
          </Col>
          <Anchor
            className="anchor"
            items={items}
            direction="horizontal"
            affix={false}
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
