import { Avatar, Col, Layout, Row, Space, Typography } from 'antd';
import Home from './components/Home';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';
import profilePhoto from './assets/profile_photo.jpg';
const { Content, Header } = Layout;

const items = [
  { key: 'home', href: "#home", title: 'Home', component: Home },
  { key: 'projects', href: "#projects", title: 'Projects', component: Projects },
  { key: 'certifications', href: "#certifications", title: 'Certifications', component: Certifications },
  { key: 'contact', href: "#contact", title: 'Contact', component: Contact }
]

function App() {
  return (
    <Layout>
      <Header>
        <Row align={'middle'}>
          <Col span={12}>
            <Space>
              <Avatar src={profilePhoto} />
              <Typography>
                Venkatesh's Portfolio
              </Typography>
            </Space>
          </Col>
          <Col span={12}>
            <Row justify={'space-evenly'}>
              {
                items.map((item) =>
                  <a key={item.key} href={item.href}>
                    {item.title}
                  </a>
                )
              }
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
