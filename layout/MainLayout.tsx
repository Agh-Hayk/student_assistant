import { RocketOutlined, QuestionCircleOutlined, GlobalOutlined, DingtalkOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd'
import { Header, Content, Footer } from 'antd/lib/layout/layout'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from "react";



interface MainLayoutInterface {
    children?: any
}

const MainLayout: FC<MainLayoutInterface> = ({ children }) => {

    const router = useRouter()

    const items1: any = [
        {
            label: <Link href='/'>Բուհեր</Link>,
            key: '/',
            icon: <GlobalOutlined />,

        },
        {
            label: <Link href='/questions'>Հաճախ տրվող հարցեր</Link>,
            key: '/questions',
            icon: <QuestionCircleOutlined />,
        },
        {
            label: <Link href='/stories'>Պատմություններ</Link>,
            key: '/stories',
            icon: <RocketOutlined />,
        }
    ]

    return (
        <Layout className='main-layout'>
            <Header className="header">
                <DingtalkOutlined className='logo' onClick={() => { router.push('/') }} />
                <Menu mode="horizontal" defaultSelectedKeys={['1']} selectedKeys={[router.pathname]} items={items1} />
            </Header>
            <Content
                style={{
                    padding: 24,
                    margin: 0,
                }}>
                {children}
            </Content>
            <Footer>
                student assistant | since 2022 | made by me
            </Footer>
        </Layout>
    )
}


export default MainLayout;
