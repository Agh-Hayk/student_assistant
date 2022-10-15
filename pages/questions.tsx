import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout';
import { Collapse, Tabs } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { collapses, collapses2, collapses3 } from '../costants';

const Questions: NextPage = () => {

    const { Panel } = Collapse;



    return (
        <MainLayout>
            <Tabs
                tabPosition='left'
                defaultActiveKey="1"
                items={[
                    {
                        label: (<span>
                            <QuestionCircleOutlined />
                            Կարևոր
                        </span>),
                        key: '1',
                        children: <Collapse
                            ghost
                        >
                            {collapses.map((el: any, index: any) => {
                                return (
                                    <Panel header={el.header} key={index} className="site-collapse-custom-panel">
                                        <p>{el.text}</p>
                                    </Panel>
                                )
                            })}
                        </Collapse>,
                    },
                    {
                        label: (<span>
                            <QuestionCircleOutlined />
                            Հետաքրքիր
                        </span>),
                        key: '2',
                        children: <Collapse
                            ghost
                        >
                            {collapses2.map((el: any, index: any) => {
                                return (
                                    <Panel header={el.header} key={index} className="site-collapse-custom-panel">
                                        <p>{el.text}</p>
                                    </Panel>
                                )
                            })}
                        </Collapse>,
                    },
                    {
                        label: (<span>
                            <QuestionCircleOutlined />
                            Կրթությունը
                        </span>),
                        key: '3',
                        children: <Collapse
                            ghost
                        >
                            {collapses3.map((el: any, index: any) => {
                                return (
                                    <Panel header={el.header} key={index} className="site-collapse-custom-panel">
                                        <p>{el.text}</p>
                                    </Panel>
                                )
                            })}
                        </Collapse>,
                    }
                ]}
            />
        </MainLayout>
    )
}

export default Questions
