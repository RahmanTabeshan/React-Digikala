import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "./Home.module.css";
import "./Home.css";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination" ;
import slide1 from "../../Image/slider/slide1.jpg";
import slide2 from "../../Image/slider/slide2.jpg";
import slide3 from "../../Image/slider/slide3.jpg";
import slide4 from "../../Image/slider/slide4.jpg";
import slide5 from "../../Image/slider/slide5.jpg";
import slide6 from "../../Image/slider/slide6.jpg";
import slide7 from "../../Image/slider/slide7.jpg";
import slide8 from "../../Image/slider/slide8.jpg";

const Home = () => {
    const pagination = {
        el: ".pag",
        clickable: true,
    };

    const navigation = {
        nextEl: ".next",
        prevEl: ".prev",
    };

    const autoplay = {
        delay: 2000,
    };

    const slider = [
        { id: 1, title: "slide1", src: slide1 },
        { id: 2, title: "slide2", src: slide2 },
        { id: 3, title: "slide3", src: slide3 },
        { id: 4, title: "slide4", src: slide4 },
        { id: 5, title: "slide5", src: slide5 },
        { id: 6, title: "slide6", src: slide6 },
        { id: 7, title: "slide7", src: slide7 },
        { id: 8, title: "slide8", src: slide8 },
    ];

    return (
        <main className="max-w-[1366px] w-full h-[2000px]">
            <section className="">
                <Swiper
                    loop={true}
                    autoplay={autoplay}
                    navigation={navigation}
                    pagination={pagination}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="relative h-full"
                >
                    {slider.map((item) => (
                        <SwiperSlide className={Styles.slide} key={item.id}>
                            <img
                                className="w-full h-[140px] mobile:h-[170px] md:h-[250px!important] lg:h-[300px!important] xl:h-[400px!important]"
                                src={item.src}
                                alt={item.title}
                            />
                        </SwiperSlide>
                    ))}
                    <div className="pag flex absolute bottom-3 right-4 md:right-20 z-10"></div>
                </Swiper>
            </section>
        </main>
    );
};

export default Home;
