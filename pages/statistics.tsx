import { Col, Progress, Row, Table, Typography } from 'antd';
import type { NextPage } from 'next'
import { stTable, uniDataTable } from '../costants';
import MainLayout from '../layout/MainLayout';

const Statistics: NextPage = () => {

    const { Title } = Typography;

    return (
        <MainLayout>
            <Row justify={'space-around'}>
                <Col span={10}>
                    <Table
                        size='small'
                        columns={stTable}
                        pagination={false}
                        dataSource={uniDataTable}
                    />
                </Col>
                <Col span={7}>
                    <Title level={4}>Վիճակագրություն (701 մասնակից)</Title>
                    <Title level={5}>Պորտուի համալսարան</Title>
                    <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={28}
                    />
                    <br /><br />
                    <Title level={5}>Գրանադայի համալսարան</Title>
                    <Progress
                        strokeColor={{
                            from: '#108ee9',
                            to: '#87d068',
                        }}
                        percent={26}
                        status="active"
                    />
                    <br /><br />
                    <Title level={5}>Յաշի Ալեքսանդրու Իոան Կուզա համալսարան</Title>
                    <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={23}
                    />
                    <br /><br />
                    <Title level={5}>Լինշյոպինգի համալսարան</Title>
                    <Progress
                        strokeColor={{
                            from: '#108ee9',
                            to: '#87d068',
                        }}
                        percent={18}
                        status="active"
                    />
                </Col>
            </Row>



        </MainLayout>
    )
}

export default Statistics
