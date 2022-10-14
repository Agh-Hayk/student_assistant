import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout';
import { Row, Col, Card, Empty, Carousel, Statistic, Rate } from 'antd';
import { Router, useRouter } from 'next/router';

const Home: NextPage = () => {


  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


  const cards = [
    {
      id: 1,
      header: "ՊՈՐՏՈՒԻ ՀԱՄԱԼՍԱՐԱՆ (ՊՈՐՏՈՒԳԱԼԻԱ)",
      desc: "Էրազմուս միջազգային կրեդիտային շարժունության ծրագրի շրջանակներում 2014 թվականից Վանաձորի պետական համալսարանը համագործակցում է Պորտուի համալսարանի հետ:",
      rate: 5,
      students: 134,
      img: '/svg/img1.jpg'
    },
    {
      id: 2,
      header: "ԳՐԱՆԱԴԱՅԻ ՀԱՄԱԼՍԱՐԱՆ (ԻՍՊԱՆԻԱ)",
      desc: "Իսպանիայի Գրանադա քաղաքի համալսարանը (UGR)  հիմնադրվել է 1531 թվականին Կառլոս V կայսեր կողմից: Համալսարանն ունի շուրջ 80000 ուսանող և համարվում է...",
      rate: 5,
      students: 353,
      img: '/svg/img2.jpg'
    },
    {
      id: 3,
      header: "ՅԱՇԻ ԱԼԵՔՍԱՆԴՐՈՒ ԻՈԱՆ ԿՈՒԶԱ ՀԱՄԱԼՍԱՐԱՆ (ՌՈՒՄԻՆԻԱ)",
      desc: "Էրազմուս միջազգային կրեդիտային շարժունության ծրագրի շրջանակներում 2013 թվականից Վանաձորի պետական համալսարանը համագործակցում է Յաշի Ալեքսանդրու Իոան...",
      rate: 5,
      students: 312,
      img: '/svg/img3.png'
    },
    {
      id: 4,
      header: "ԼԻՆՇՅՈՊԻՆԳԻ ՀԱՄԱԼՍԱՐԱՆ (ՇՎԵԴԻԱ)",
      desc: "Էրազմուս միջազգային կրեդիտային շարժունության ծրագրի շրջանակներում 2014 թվականից Վանաձորի պետական համալսարանը համագործակցում է Պորտուի համալսարանի հետ:",
      rate: 5,
      students: 253,
      img: '/svg/img2.jpg'
    }
  ]

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
        {cards.map((el: any, index: any) => {
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
                {/* <h3>{el.header}</h3> */}
                <p style={{ 'marginBottom': '20px' }}>{el.desc}</p>
                <Row gutter={[10, 30]} justify='space-between' align='bottom'>
                  <Col span={8}>
                    <Statistic title="դիմորդ" value={el.students} />
                  </Col>
                  {/* <Col span={12} >
                    <span>
                      <Rate allowHalf tooltips={desc} value={el.rate} />
                    </span>
                  </Col> */}
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
