import { Button, Col, Row, Space, Typography } from "antd";
import profilePhoto from '../assets/profile_photo.jpg';
import { DownloadOutlined } from "@ant-design/icons";

const Home = () => {
    return (
        <Row
            id="home"
            className="container"
            justify="center"
            align="middle"
        >
            <Col span={24} align="center">
                <Space direction="vertical">
                    <img
                        justify="center"
                        align="middle"
                        src={profilePhoto}
                        alt="profile"
                        className="profile" />
                    <Space direction="vertical">
                        <Typography.Title>
                            Venkatesh M
                        </Typography.Title>
                        <Button>
                            <DownloadOutlined /> Resume
                        </Button>
                    </Space>
                </Space>
            </Col>
        </Row>
    )
}

export default Home;
