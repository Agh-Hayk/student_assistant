import { BookOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Timeline } from 'antd';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { storyCards } from '../../costants';
import MainLayout from '../../layout/MainLayout';

const View: NextPage = () => {

    const [select, setSelect] = useState<any>('')
    const router = useRouter();


    useEffect(() => {
        if (router.query?.id) {
            const selectCard: any = storyCards.filter((el: any) => {
                return el.id == router.query?.id
            })

            setSelect(selectCard[0])
        }

    }, [router.query?.id])


    return (
        <MainLayout>
            <Timeline style={{ 'maxWidth': '1100px', 'margin': '0 auto' }}>
                <Timeline.Item color="green" dot={<UserOutlined />}>
                    <h2>{select?.header}</h2>
                    <Avatar src={select?.avatar} size={180} />
                </Timeline.Item>
                <Timeline.Item dot={<BookOutlined />}>
                    <h2>{select.desc}</h2>

                    <p>
                        {select?.text}
                    </p>
                </Timeline.Item>
                <Timeline.Item>
                </Timeline.Item>
            </Timeline>
        </MainLayout>
    )
}

export default View
