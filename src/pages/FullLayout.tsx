import { Outlet } from 'react-router-dom'
import { Col, Layout, Row } from "antd"

const FullLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
        <Row>
                <Col
                    style={{ marginTop: 120 }}
                    xs={{ span: 20, offset: 2, flex: "100%" }}
                    sm={{ span: 12, offset: 6, flex: "100%" }}
                >
                    <Outlet />
                </Col>
            </Row>
    </Layout>
  )
}

export default FullLayout
