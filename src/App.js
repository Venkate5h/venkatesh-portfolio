import { Anchor, Avatar, Col, Layout, Row, Space, Typography } from 'antd';
import Home from './components/Home';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Skills from './components/Skills';
import profilePhoto from './assets/profile_photo.jpg';
import './App.css';

const { Content, Header } = Layout;

const items = [
  { key: 'home', href: "#home", title: 'Home', component: Home },
  { key: 'skills', href: "#skills", title: 'Skills', component: Skills },
  { key: 'projects', href: "#projects", title: 'Projects', component: Projects },
  { key: 'certifications', href: "#certifications", title: 'Certifications', component: Certifications },
  { key: 'contact', href: "#contact", title: 'Contact', component: Contact }
];

function App() {
  return (
    <Layout>
      <Header>
        <Row align={'middle'}>
          <Col xs={0} md={12} align="center">
            <Space>
              <Avatar src={profilePhoto} />
              <Typography>
                Venkatesh's Portfolio
              </Typography>
            </Space>
          </Col>
          <Col xs={24} md={12} align="center">
            <Row justify="center">
              <Anchor items={items} direction="horizontal" affix={false} />
            </Row>
          </Col>
        </Row>
      </Header>
      <Content>
        {
          items.map((item) =>
            <item.component key={item.key} />
          )
        }
      </Content>
    </Layout>
  );
}

export default App;
