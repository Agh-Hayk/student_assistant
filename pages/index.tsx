import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout';
import { Row, Col, Card, Carousel, Statistic } from 'antd';
import { useRouter } from 'next/router';
import { unCards } from '../costants';

const Home: NextPage = () => {

  const router = useRouter()


  return (
    <MainLayout>
      <Carousel autoplay>
        <div>
          <h1 className='carusel-content'>Բարև բոլորին 👋</h1>
        </div>
        <div>
          <h1 className='carusel-content'>Այստեղ դուք կգտնեք ուսանողների շարժունության վերաբերյալ բոլոր հարցերի պատասխանները</h1>
        </div>
        <div>
          <h1 className='carusel-content'>Ինչպես նաև այլ օգտակար տեղեկատվություն</h1>
        </div>
      </Carousel>

      <Row gutter={[30, 30]} align='stretch'>
        {unCards.map((el: any, index: any) => {
          return (
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              xl={{ span: 6 }}
              key={index}
            >
              <Card title={el.header}
                className='us-card'
                style={{ 'cursor': 'pointer', 'height': '100%' }}
                onClick={() => {
                  router.push("/view/" + el.id);
                }}>
                <img src={el.img} style={{ 'width': '100%', 'height': '250px', 'objectFit': 'fill', 'marginBottom': '30px' }} alt="UI" />
                <p style={{ 'marginBottom': '20px' }}>{el.desc}</p>
                <Row gutter={[10, 30]} justify='space-between' align='bottom'>
                  <Col span={8}>
                    <Statistic title="դիմորդ" value={el.students} />
                  </Col>
                </Row>
              </Card>
            </Col>
          )
        })}
      </Row>
    </MainLayout>
  )
}

export default Home
