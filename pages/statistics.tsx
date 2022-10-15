import { Col, Progress, Row, Table, Tree, Typography } from 'antd';
import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout';
import { ColumnsType } from 'antd/lib/table';

const Statistics: NextPage = () => {

    const { DirectoryTree } = Tree

    interface DataType {
        key: React.Key;
        name: string;
        age: string;
        address: string;
        description: string;
    }

    const columns: ColumnsType<DataType> = [
        { title: 'բուհ  ', dataIndex: 'ham', key: 'ham' },
        { title: '2018', dataIndex: 'qanak', key: '2018' },
        { title: '2019', dataIndex: 'qanak2', key: '2019' },
        { title: '2020', dataIndex: 'qanak3', key: '2020' },
        { title: '2021', dataIndex: 'qanak4', key: '2021' },
        { title: '2022', dataIndex: 'qanak5', key: '2022' },
    ];
    const { Title } = Typography;

    const newData:any=[
        {
            key: 1,
            ham: 'Պորտուի համալսարան',
            qanak: 30,
            qanak2: 23,
            qanak3: 45,
            qanak4: 93,
            qanak5: 29,
        },
        {
            key: 2,
            ham: 'Գրանադայի համալսարան',
            qanak: 38,
            qanak2: 94,
            qanak3: 27,
            qanak4: 23,
            qanak5: 45,
        },
        {
            key: 3,
            ham: 'Յաշի Ալեքսանդրու Իոան Կուզա համալսարան',
            qanak: 45,
            qanak2: 23,
            qanak3: 25,
            qanak4: 54,
            qanak5: 20,
        },
        {
            key: 4,
            ham: 'Լինշյոպինգի համալսարան',
            qanak: 13,
            qanak2: 45,
            qanak3: 34,
            qanak4: 23,
            qanak5: 12,
        },
    ]



    return (
        <MainLayout>
            <Row justify={'space-around'}>
                <Col span={10}>
                    <Table
                        size='small'
                        columns={columns}
                        pagination={false}
                        dataSource={newData}
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
