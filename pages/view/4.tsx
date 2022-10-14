import { Button, Carousel, Result, Timeline } from 'antd';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import MainLayout from '../../layout/MainLayout';

const View4: NextPage = () => {
    const rot = useRouter()
    return (
        <MainLayout>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={() => { rot.push('/') }}>Back Home</Button>}
            />
        </MainLayout>
    )
}

export default View4
