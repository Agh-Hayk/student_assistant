import { Carousel, Timeline } from 'antd';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import MainLayout from '../../layout/MainLayout';

const View: NextPage = () => {
    // const router = useRouter();

    // const id: any = router.query?.id;

    // const cards = [
    //     {
    //         id: 1,
    //         header: "ՊՈՐՏՈՒԻ ՀԱՄԱԼՍԱՐԱՆ (ՊՈՐՏՈՒԳԱԼԻԱ)",
    //         desc: "Էրազմուս միջազգային կրեդիտային շարժունության ծրագրի շրջանակներում 2014 թվականից Վանաձորի պետական համալսարանը համագործակցում է Պորտուի համալսարանի հետ: Պորտուի համալսարանը հիմնվել է 1911 թ. մարտի 22-ին: Այն ուսանողների թվով և հետազոտական հնարավորություններով Պորտուգալիայի պետական երկրորդ համալսարանն է:",
    //         rate: 5,
    //         students: 26372
    //     },
    //     {
    //         id: 2,
    //         header: "Header",
    //         desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         rate: 4.5,
    //         students: 36192
    //     },
    //     {
    //         id: 3,
    //         header: "Header",
    //         desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         rate: 4,
    //         students: 12423
    //     },
    //     {
    //         id: 4,
    //         header: "Header",
    //         desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         rate: 3.5,
    //         students: 89732
    //     },
    // ]

    // const selectCard: any = cards.filter((el: any)=>{
    //     return el.id = id
    // })


    return (
        <MainLayout>
            <Timeline style={{ 'maxWidth': '1100px', 'margin': '0 auto' }}>
                <img src="/svg/img1.jpg" style={{ 'width': '100%', 'height': '400px', 'objectFit': 'cover', 'marginBottom': '30px' }} alt="UI" />
                <Timeline.Item>
                    <h2>ՊՈՐՏՈՒԻ ՀԱՄԱԼՍԱՐԱՆ (ՊՈՐՏՈՒԳԱԼԻԱ)</h2>

                    <p>
                        Էրազմուս միջազգային կրեդիտային շարժունության ծրագրի շրջանակներում 2014 թվականից Վանաձորի պետական համալսարանը համագործակցում է Պորտուի համալսարանի հետ: Պորտուի համալսարանը հիմնվել է 1911 թ. մարտի 22-ին: Այն ուսանողների թվով և հետազոտական հնարավորություններով Պորտուգալիայի պետական երկրորդ համալսարանն է:
                        <br /><br />
                        Համագործակցության շրջանակներում արդեն 10 ուսանողներ կրթություն են ստացել Պորտուի համալսարանի տարբեր բաժիններում: Համալսարանի հետ համագործակցային կապերն ամրապնդելու և նոր հնարավորություններ ստեղծելու նպատակով շարունակաբար իրականացվում են նաև սեմինարներ, դասընթացներ, տարաբնույթ հանդիպումներ և քննարկումներ, որոնց մասնակցում են ինչպես ուսանողներ, այնպես էլ Պորտուի համալսարանի պրոֆեսորադասախոսական և վարչական կազմի ներկայացուցիչներ:
                    </p>
                    <p>
                        «Մեկ օրվա ընթացքում ես անցա ավելի քան 4549կմ, որպեսզի ականատես լինեմ Պորտուի փողոցների հրաշքին, ստանամ կրթություն Պորտուի համալսարանի բանասիրության ֆակուլտետի հյուրընկալ պատերի ներսում, ձեռք բերեմ հրաշալի ընկերներ տարբեր միջոցառումների և Էրազմուս ուսանողական խորհրդի կողմից կազմակերպված էքսկուրսիաների ժամանակ, որպեսզի մեկ հարկի տակ ապրելով՝ ձեռք բերեմ մի նոր ընտանիք, նոր հիշողություններ, որոնք կպահպանվեն ամբողջ կյանքիս ընթացքում, որպեսզի գամ որպես մարդ, սակայն ներկայանամ որպես մի ամբողջ ազգ: Հայաստանն իմ հայրենիքն է, իսկ Պորտուգալիան՝ սրտիս երկիրը: Էրազմուս + ծրագիրն ինձ դարձրել է ավելի փորձառու՝ հնարավորություն տալով սովորել այն, ինչ չի կարելի սովորել ոչ մի համալսարանում և գտնել ոչ մի գրքում», նշում է Լուսինե Մանուկյանը, որը 2017 թ. շարժունության ծրագրի շրջանակներում ուսումնառություն է ստացել Պորտոյի համալսարանի բանասիրության ֆակուլտետում:
                    </p>
                </Timeline.Item>
                <Timeline.Item>
                    <h3>ՏԵՍԱԴԱՐԱՆ</h3>
                    <Carousel autoplay>
                        <div>
                            <img src="/svg/p1.jpg" style={{ 'width': '100%', 'height': '400px', 'objectFit': 'contain' }} alt="UI" />
                        </div>
                        <div>
                            <img src="/svg/p2.jpg" style={{ 'width': '100%', 'height': '400px', 'objectFit': 'contain' }} alt="UI" />
                        </div>
                        <div>
                            <img src="/svg/p3.jpg" style={{ 'width': '100%', 'height': '400px', 'objectFit': 'contain' }} alt="UI" />
                        </div>
                    </Carousel>
                </Timeline.Item>
                <Timeline.Item>
                    <h3>ՊՈՐՏՈԻԻ ՀԱՄԱԼՍԱՐԱՆՈՒՄ ՇԱՐԺՈՒՆՈՒԹՅԱՆ ՊԱՅՄԱՆՆԵՐԸ</h3>

                    <p>
                        Էրազմուս+ Միջազգային կրեդիտային շարժունության ծրագրի Գործողություն 107-ի շրջանակներում Պորտուի համալսարանը տրամադրում է կրթաթոշակներ ՎՊՀ-ի ակադեմիական բոլոր աստիճանների ուսանողների, պրոֆեսորադասախոսական և վարչական անձնակազմի համար:
                        Ուսանողների շարժունություն. Էրզմուս ծրագրի շրջանակներում Պորտուի համալսարանը տրամադրում է ուսանողական շարժունության կրթաթոշակներ մեկ կիսամյակ տևողությամբ: Ովքե՞ր կարող են դիմել Էրազմուսի կրթաթոշակ ստանալու համար: Ուսանողական շարժունության կրթաթոշակի համար կարող են դիմել բակալավրի 2-րդ, 3-րդ և 4րդ (առաջին կիսամյակ) կուրսի, մագիստրատուրայի 1-ին և 2-րդ կուրսի (առաջին կիսամյակ) և ասպիրանտուրայի ուսանողները:
                        Ի՞նչ դասընթացներ կարելի է անցնել ուսումնառության ընթացքում: Համալսարանը տրամադրում է բազմակողմանի կրթություն տարբեր բաժիններում՝ անգլերենով և պորտուգալերենով: Պորտուի համալսարանում առաջարկվող անգլիալեզու դասընթացներին կարելի է ծանոթանալ հետևյալ հղումով՝ <a href="https://mobileplus3.up.pt/courses">https://mobileplus3.up.pt/courses</a> :
                        Ի՞նչ չափանիշներով է կատարվում ուսանողների ընտրությունը: Կրթաթաշակ ստանալու համար դիմող ուսանողների ընտրությունն իրականացվում է ըստ հետևյալ չափանիշների՝
                    </p>
                    <p>
                        1. Ուսման առաջադիմություն, <br />
                        2. Օտար լեզվի իմացություն (անգլերեն՝ B1-B2 կամ պորտուգալերեն)<br />
                        3. Մոտիվացիա,<br />
                        4. Ուսանողների արտալսարանային ակտիվությունը ցանկալի է:<br />
                    </p>
                    <p>
                        Ինչպե՞ս դիմել Պորտուի համալսարանում Էրազմուսի կրթաթոշակ ստանալու համար: Դիմումները լրացվում են առցանց կարգով հետևյալ կայքէջում՝ <a href="https://mobileplus3.up.pt/apply">https://mobileplus3.up.pt/apply</a> , որի համար անհրաժեշտ է էլեկտրոնային փոստի միջոցով գրանցվել հետևյալ հղումով՝ <a href="https://mobileplus3.up.pt/user/create_applicant">https://mobileplus3.up.pt/user/create_applicant</a> : Պահանջվող փաստաթղթերն են՝
                    </p>
                    <p>
                        1. Լուսանկար,<br />
                        2. Անձը հաստատող փաստաթուղթ (անձնագիր/նույնականացման քարտ),<br />
                        3. Կրթական աստիճանը հաստատող փաստաթուղթ (մագիստրատուրայի և ասպիրանտուրայի ուսանողների համար),<br />
                        4. Ակադեմիական տեղեկագիր (բոլոր գնահատականներով՝ առաջին կուրսից սկսած),<br />
                        5. Մայր բուհում ուսանողի կարգավիճակը հաստատող տեղեկանք,<br />
                        6. Օտար լեզվի իմացության վկայական,<br />
                        7. Հրավեր-նամակ հյուրընկալող բուհի կողմից,<br />
                        8. Ուսումնական համաձայնագիր (հյուրընկալող բուհում ուսումնասիրելիք դասընթացների ցանկ)
                        Անհրաժեշտության/առկայության դեպքում՝<br />
                        9. Ֆիզիկական սահմանափակ կարողությունների կարգավիճակը հաստատող փաստաթուղթ,<br />
                        10. Սոցիալական անապահով կարգավիճակը հաստատող փաստաթուղթ,<br />
                        11. Հասարակական/քաղաքական անապահով կարգավիճակը հաստատող փաստաթուղթ,<br />
                        12. Այլ անհրաժեշտ փաստաթղթեր:<br />
                    </p>

                </Timeline.Item>
            </Timeline>
        </MainLayout>
    )
}

export default View