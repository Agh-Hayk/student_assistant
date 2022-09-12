import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout';
import { Collapse, Tabs } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const Questions: NextPage = () => {

    const gridStyle: React.CSSProperties = {
        width: '25%',
        textAlign: 'center',
        cursor: 'pointer'
    };

    const { Panel } = Collapse;

    const text = `
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        `;

    const collapses: any = [1, 2, 3, 4, 5, 6];
    const collapses2: any = [7, 8, 9, 10, 11];
    const collapses3: any = [12, 13];

    return (
        <MainLayout>
            <Tabs
                tabPosition='left'
                defaultActiveKey="1"
                items={[
                    {
                        label: (<span>
                            <QuestionCircleOutlined />
                            Type 1
                        </span>),
                        key: '1',
                        children: <Collapse
                            ghost
                        >
                            {collapses.map((el: any, index: any) => {
                                return (
                                    <Panel header={`This is panel header ${el}`} key={index} className="site-collapse-custom-panel">
                                        <p>{text}</p>
                                    </Panel>
                                )
                            })}
                        </Collapse>,
                    },
                    {
                        label: (<span>
                            <QuestionCircleOutlined />
                            Type 2
                        </span>),
                        key: '2',
                        children: <Collapse
                            ghost
                        >
                            {collapses2.map((el: any, index: any) => {
                                return (
                                    <Panel header={`This is panel header ${el}`} key={index} className="site-collapse-custom-panel">
                                        <p>{text}</p>
                                    </Panel>
                                )
                            })}
                        </Collapse>,
                    },
                    {
                        label: (<span>
                            <QuestionCircleOutlined />
                            Type 3
                        </span>),
                        key: '3',
                        children: <Collapse
                            ghost
                        >
                            {collapses3.map((el: any, index: any) => {
                                return (
                                    <Panel header={`This is panel header ${el}`} key={index} className="site-collapse-custom-panel">
                                        <p>{text}</p>
                                    </Panel>
                                )
                            })}
                        </Collapse>,
                    },
                    {
                        label: (<span>
                            <QuestionCircleOutlined />
                            Type 4
                        </span>),
                        key: '4',
                        children: <Collapse
                            ghost
                        >
                            {collapses3.map((el: any, index: any) => {
                                return (
                                    <Panel header={`This is panel header ${el}`} key={index} className="site-collapse-custom-panel">
                                        <p>{text}</p>
                                    </Panel>
                                )
                            })}
                        </Collapse>,
                    },
                ]}
            />
        </MainLayout>
    )
}

export default Questions
