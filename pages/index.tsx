import type { NextPage } from 'next'
import MainLayout from '../layout/MainLayout';
import { Row, Col, Card, Empty, Carousel, Statistic, Rate } from 'antd';

const Home: NextPage = () => {


  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


  const cards = [
    {
      header: "Header",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rate: 5,
      students: 26372
    },
    {
      header: "Header",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rate: 4.5,
      students: 36192
    },
    {
      header: "Header",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rate: 4,
      students: 12423
    },
    {
      header: "Header",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rate: 3.5,
      students: 89732
    },
    {
      header: "Header",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rate: 3,
      students: 12432
    },
    {
      header: "Header",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rate: 3,
      students: 35632
    },
    {
      header: "Header",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rate: 3,
      students: 25435
    },
    {
      header: "Header",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rate: 2.5,
      students: 24242
    },
    {
      header: "Header",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rate: 3,
      students: 12432
    },
    {
      header: "Header",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rate: 3,
      students: 35632
    },
    {
      header: "Header",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rate: 3,
      students: 25435
    },
    {
      header: "Header",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rate: 2.5,
      students: 24242
    }
  ]



  return (
    <MainLayout>
      <Carousel autoplay>
        <div>
          <h3 className='carusel-content'>What is Lorem Ipsum?</h3>
        </div>
        <div>
          <h3 className='carusel-content'>What is Lorem Ipsum?</h3>
        </div>
        <div>
          <h3 className='carusel-content'>What is Lorem Ipsum?</h3>
        </div>
        <div>
          <h3 className='carusel-content'>What is Lorem Ipsum?</h3>
        </div>
      </Carousel>

      <Row gutter={[30, 30]}>
        {cards.map((el: any, index: any) => {
          return (
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              xl={{ span: 6 }}
              key={index}
            >
              <Card title="Card title">
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='error' />
                <h3>{el.header}</h3>
                <p style={{ 'marginBottom': '50px' }}>{el.desc}</p>
                <Row gutter={[30, 30]} justify='space-between' align='bottom'>
                    <Col span={10}>
                      <Statistic title="Active Students" value={el.students} />
                  </Col>
                  <Col span={12} >
                    <span>
                      <Rate allowHalf tooltips={desc} value={el.rate} />
                    </span>
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
