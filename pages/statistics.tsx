import { Col, Progress, Row, Table, Tree, Typography } from 'antd';
import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout';
import type { DataNode, TreeProps } from 'antd/es/tree';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
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
        { title: 'Անուն Ազգանուն', dataIndex: 'name', key: 'name' },
        { title: 'Սկիզբ', dataIndex: 'age', key: 'age' },
        { title: 'Ավարտ', dataIndex: 'address', key: 'address' },
    ];
    const { Title } = Typography;

    const data: DataType[] = [
        {
            key: 1,
            name: 'Մակարյան Սամվել',
            age: '2018.09',
            address: '2019.06',
            description: 'Այստեղ ուսանելը մեծ հնարավորություն է ընձեռում ձեռք բերել գիտելիքների հարուստ պաշար և կայանալ ընտրված մասնագիտության մեջ: Ուրախ եմ, որ ժամանակին ճիշտ ընտրություն եմ կատարել և խորհուրդ կտամ ուսանողներին օգտվել կրթական ծրագրերի լայն հնարավորություններից, որոնք ընձեռվում են սովորողներին ուսման ընթացքում:',
        },
        {
            key: 2,
            name: 'Մանուկյան Արմեն',
            age: '2017.09',
            address: '2018.06',
            description: 'Այստեղ ուսանելը մեծ հնարավորություն է ընձեռում ձեռք բերել գիտելիքների հարուստ պաշար և կայանալ ընտրված մասնագիտության մեջ: Ուրախ եմ, որ ժամանակին ճիշտ ընտրություն եմ կատարել և խորհուրդ կտամ ուսանողներին օգտվել կրթական ծրագրերի լայն հնարավորություններից, որոնք ընձեռվում են սովորողներին ուսման ընթացքում:',
        },
        {
            key: 3,
            name: 'Պապինյան Ավետիք',
            age: '2020.09',
            address: '2021.06',
            description: 'Այստեղ ուսանելը մեծ հնարավորություն է ընձեռում ձեռք բերել գիտելիքների հարուստ պաշար և կայանալ ընտրված մասնագիտության մեջ: Ուրախ եմ, որ ժամանակին ճիշտ ընտրություն եմ կատարել և խորհուրդ կտամ ուսանողներին օգտվել կրթական ծրագրերի լայն հնարավորություններից, որոնք ընձեռվում են սովորողներին ուսման ընթացքում:',
        },
        {
            key: 4,
            name: 'Պողոսյան Նարեկ',
            age: '2020.09',
            address: '2021.06',
            description: 'Այստեղ ուսանելը մեծ հնարավորություն է ընձեռում ձեռք բերել գիտելիքների հարուստ պաշար և կայանալ ընտրված մասնագիտության մեջ: Ուրախ եմ, որ ժամանակին ճիշտ ընտրություն եմ կատարել և խորհուրդ կտամ ուսանողներին օգտվել կրթական ծրագրերի լայն հնարավորություններից, որոնք ընձեռվում են սովորողներին ուսման ընթացքում:',
        },
        {
            key: 5,
            name: 'Մակարյան Սամվել',
            age: '2018.09',
            address: '2019.06',
            description: 'Այստեղ ուսանելը մեծ հնարավորություն է ընձեռում ձեռք բերել գիտելիքների հարուստ պաշար և կայանալ ընտրված մասնագիտության մեջ: Ուրախ եմ, որ ժամանակին ճիշտ ընտրություն եմ կատարել և խորհուրդ կտամ ուսանողներին օգտվել կրթական ծրագրերի լայն հնարավորություններից, որոնք ընձեռվում են սովորողներին ուսման ընթացքում:',
        },
        {
            key: 6,
            name: 'Մանուկյան Արմեն',
            age: '2017.09',
            address: '2018.06',
            description: 'Այստեղ ուսանելը մեծ հնարավորություն է ընձեռում ձեռք բերել գիտելիքների հարուստ պաշար և կայանալ ընտրված մասնագիտության մեջ: Ուրախ եմ, որ ժամանակին ճիշտ ընտրություն եմ կատարել և խորհուրդ կտամ ուսանողներին օգտվել կրթական ծրագրերի լայն հնարավորություններից, որոնք ընձեռվում են սովորողներին ուսման ընթացքում:',
        },
        {
            key: 7,
            name: 'Պապինյան Ավետիք',
            age: '2020.09',
            address: '2021.06',
            description: 'Այստեղ ուսանելը մեծ հնարավորություն է ընձեռում ձեռք բերել գիտելիքների հարուստ պաշար և կայանալ ընտրված մասնագիտության մեջ: Ուրախ եմ, որ ժամանակին ճիշտ ընտրություն եմ կատարել և խորհուրդ կտամ ուսանողներին օգտվել կրթական ծրագրերի լայն հնարավորություններից, որոնք ընձեռվում են սովորողներին ուսման ընթացքում:',
        },
        {
            key: 8,
            name: 'Պողոսյան Նարեկ',
            age: '2020.09',
            address: '2021.06',
            description: 'Այստեղ ուսանելը մեծ հնարավորություն է ընձեռում ձեռք բերել գիտելիքների հարուստ պաշար և կայանալ ընտրված մասնագիտության մեջ: Ուրախ եմ, որ ժամանակին ճիշտ ընտրություն եմ կատարել և խորհուրդ կտամ ուսանողներին օգտվել կրթական ծրագրերի լայն հնարավորություններից, որոնք ընձեռվում են սովորողներին ուսման ընթացքում:',
        },
    ];

    const treeData: DataNode[] = [
        {
            title: 'Բուհեր',
            key: '0-0',
            children: [
                {
                    title: 'Պորտուի համալսարան',
                    key: '0-0-0',
                    children: [
                        {
                            title: 'Վանաձորի պետական համալսարան (8)',
                            key: '0-0-0-00',
                            children: [
                                {
                                    title: <Table
                                        style={{ 'width': '600px' }}
                                        size='small'
                                        columns={columns}
                                        pagination={false}
                                        expandable={{
                                            expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                                            rowExpandable: record => record.name !== 'Not Expandable',
                                        }}
                                        dataSource={data}
                                    />,
                                    key: '0-0-0-0-100',
                                    icon: <></>
                                },
                            ],
                        },
                    ],
                },
                {
                    title: 'Գրանադայի համալսարան',
                    key: '0-0-1',
                    children: [
                        {
                            title: 'Վանաձորի պետական համալսարան (8)',
                            key: '0-0-0-01',
                            children: [
                                {
                                    title: <Table
                                        style={{ 'width': '600px' }}
                                        size='small'
                                        columns={columns}
                                        pagination={false}
                                        expandable={{
                                            expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                                            rowExpandable: record => record.name !== 'Not Expandable',
                                        }}
                                        dataSource={data}
                                    />,
                                    key: '0-0-0-0-200',
                                    icon: <></>
                                },
                            ],
                        },
                    ],
                },
                {
                    title: 'Յաշի Ալեքսանդրու Իոան Կուզա համալսարան',
                    key: '0-0-2',
                    children: [
                        {
                            title: 'Վանաձորի պետական համալսարան (8)',
                            key: '0-0-0-02',
                            children: [
                                {
                                    title: <Table
                                        style={{ 'width': '600px' }}
                                        size='small'
                                        pagination={false}
                                        columns={columns}
                                        expandable={{
                                            expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                                            rowExpandable: record => record.name !== 'Not Expandable',
                                        }}
                                        dataSource={data}
                                    />,
                                    key: '0-0-0-0-300',
                                    icon: <></>
                                },
                            ],
                        },
                    ],
                },
                {
                    title: ' Լինշյոպինգի համալսարան',
                    key: '0-0-3',
                    children: [
                        {
                            title: 'Վանաձորի պետական համալսարան (8)',
                            key: '0-0-0-03',
                            children: [
                                {
                                    title: <Table
                                        style={{ 'width': '600px' }}
                                        size='small'
                                        columns={columns}
                                        pagination={false}
                                        expandable={{
                                            expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                                            rowExpandable: record => record.name !== 'Not Expandable',
                                        }}
                                        dataSource={data}
                                    />,
                                    key: '0-0-0-0-400',
                                    icon: <></>
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ];

    const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };



    return (
        <MainLayout>
            <Row >
                <Col span={16}>
                    <DirectoryTree
                        className='st-tree'
                        showLine
                        defaultExpandedKeys={['0-0']}
                        multiple
                        switcherIcon={<DownOutlined />}
                        onSelect={onSelect}
                        treeData={treeData}
                        selectable={false}
                    />
                </Col>
                <Col span={6}>
                    <Title level={4}>Վիճակագրություն (80 մասնակից)</Title>
                    <Title level={5}>Պորտուի համալսարան</Title>
                    <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={23}
                    />
                    <br /><br />
                    <Title level={5}>Գրանադայի համալսարան</Title>
                    <Progress
                        strokeColor={{
                            from: '#108ee9',
                            to: '#87d068',
                        }}
                        percent={47}
                        status="active"
                    />
                    <br /><br />
                    <Title level={5}>Յաշի Ալեքսանդրու Իոան Կուզա համալսարան</Title>
                    <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={9}
                    />
                    <br /><br />
                    <Title level={5}>Լինշյոպինգի համալսարան</Title>
                    <Progress
                        strokeColor={{
                            from: '#108ee9',
                            to: '#87d068',
                        }}
                        percent={21}
                        status="active"
                    />
                </Col>
            </Row>



        </MainLayout>
    )
}

export default Statistics
