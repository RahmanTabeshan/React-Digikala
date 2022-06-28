import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper , SwiperSlide } from "swiper/react";
import Styles from "./Home.module.css" ;
import "./Home.css" ;
import "swiper/css" ;
import "swiper/css/navigation" ;
// import "swiper/css/pagination" ;
import slide1 from "../../Image/slider/slide1.jpg" ;
import slide2 from "../../Image/slider/slide2.jpg" ;

const Home = () => {

    const pagination = {
        el : ".pag" ,
        clickable: true,
    }

    const navigation = {
        nextEl : ".next" ,
        prevEl : ".prev" ,
    }

    const autoplay = {
        delay : 2000 ,
    }

    const slider = [
        {id:1 , title:"slide1" , src:slide1},
        {id:2 , title:"slide2" , src:slide2},
    ]

    return (
        <main className="max-w-[1366px] w-full h-[2000px]">
            <section className="h-[250px] lg:h-[300px] xl:h-[400px]">
                <Swiper
                    loop={true}
                    autoplay={autoplay}
                    navigation={navigation} 
                    pagination={pagination} 
                    modules={[Navigation , Pagination,Autoplay]} 
                    className="relative h-full"
                >
                    {slider.map(item => (
                        <SwiperSlide className={Styles.slide} key={item.id}>
                            <img className="relative overflow-hidden object-cover inline-block w-full h-full" src={item.src} alt={item.title} />
                        </SwiperSlide>
                    ))}
                    <div className="pag flex absolute"></div>
                    <div className="next w-5 h-5 bg-black absolute"></div>
                    <div className="prev w-5 h-5 bg-black absolute"></div>
                </Swiper>
                
            </section>
        </main>
    );
}
 
export default Home;