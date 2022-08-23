import product1 from "../../../Image/Products/محصول اول.jpg" ;
import product2 from "../../../Image/Products/محصول دوم.jpg" ;
import product3 from "../../../Image/Products/محصول سوم.jpg" ;
import product4 from "../../../Image/Products/محصول چهارم.jpg" ;
import product5 from "../../../Image/Products/محصول پنجم.jpg" ;
import product6 from "../../../Image/Products/محصول ششم.jpg" ;
import product7 from "../../../Image/Products/محصول هفتم.jpg" ;
import product8 from "../../../Image/Products/محصول هشتم.jpg" ;
import product9 from "../../../Image/Products/محصول نهم.jpg" ;
import product10 from "../../../Image/Products/محصول دهم.jpg" ;
import product11 from "../../../Image/Products/محصول یازدهم.jpg" ;
import product12 from "../../../Image/Products/محصول دوازدهم.jpg" ;
import product13 from "../../../Image/Products/محصول شماره صد.jpg" ;
import product14 from "../../../Image/Products/محصول شماره صد و یک.jpg" ;
import product15 from "../../../Image/Products/محصول شماره صد و دو.jpg" ;
import product16 from "../../../Image/Products/محصول شماره صد و سه.jpg" ;
import product17 from "../../../Image/Products/محصول شماره صد و چهار.jpg" ;
import product18 from "../../../Image/Products/محصول شماره صد و پنج.jpg" ;
import product19 from "../../../Image/Products/cover 1.jpg" ;
import product20 from "../../../Image/Products/cover 2.jpg" ;
import product21 from "../../../Image/Products/cover3.jpg" ;
import product22 from "../../../Image/Products/cover 4.jpg" ;
import product23 from "../../../Image/Products/headphone 1.jpg" ;
import product24 from "../../../Image/Products/headphone 2.jpg" ;
import product25 from "../../../Image/Products/headphone 3.jpg" ;
import product26 from "../../../Image/Products/headphone.jpg" ;
import product27 from "../../../Image/Products/mobile 1.jpg" ;
import product28 from "../../../Image/Products/mobile 2.jpg" ;
import product29 from "../../../Image/Products/mobile 3.jpg" ;
import product30 from "../../../Image/Products/mobile 4.jpg" ;
import product31 from "../../../Image/Products/watch 1.jpg" ;
import product32 from "../../../Image/Products/watch 2.jpg" ;
import product33 from "../../../Image/Products/watch 3.jpg" ;
import product34 from "../../../Image/Products/watch 4.jpg" ;

const initialState = [
        {id:1 , title:"محصول اول" , category:"کالای دیجیتال" , type:"پاوربانک" , img:product1 , price:"3000000" , percent:"14%"},
        {id:2 , title:"محصول دوم" , category:"مد و پوشاک" , type:"لباس" , img:product2 , price:"498000" , percent:"8%"},
        {id:3 , title:"محصول سوم" , category:"خانه و آشپزخانه" , type:"ظرف" , img:product3 , price:"2598000" , percent:"15%"},
        {id:4 , title:"محصول چهارم" , category:"زیبایی و سلامت" , type:"اتو مو" , img:product4 , price:"6025300" , percent:"25%"},
        {id:5 , title:"محصول پنجم" , category:"خانه و آشپزخانه" , type:"ظرف" , img:product5 , price:"96510" , percent:"29%"},
        {id:6 , title:"محصول ششم" , category:"خودرو،ابزار و تجهیزات صنعتی" , type:"دستگاه جوش" , img:product6 , price:"458200" , percent:"30%"},
        {id:7 , title:"محصول هفتم" , category:"خانه و آشپزخانه" , type:"لامپ" , img:product7 , price:"5145836" , percent:"13%"},
        {id:8 , title:"محصول هشتم" , category:"اسباب بازی،کودک و نوزاد" , type:"عروسک" , img:product8 , price:"217000" , percent:"5%"},
        {id:9 , title:"محصول نهم" , category:"خودرو،ابزار و تجهیزات صنعتی" , type:"چراغ قوه" , img:product9 , price:"365000" , percent:"12%"},
        {id:10 , title:"محصول دهم" , category:"مد و پوشاک" , type:"لباس" , img:product10 , price:"938000" , percent:"27%"},
        {id:11 , title:"محصول یازدهم" , category:"خانه و آشپزخانه" , type:"لوستر" , img:product11 , price:"97500" , percent:"17%"},
        {id:12 , title:"محصول دوازدهم" , category:"خانه و آشپزخانه" , type:"آبمیوه گیر" , img:product12 , price:"389000" , percent:"6%"},
        {id:13 , title:"محصول سیزدهم", category:"کالای سوپرمارکتی" , type:"شامپو" , img:product13, price:"2000000", percent:"18%"} ,
        {id:14 , title:"محصول چهاردهم", category:"کالای سوپرمارکتی" , type:"نوشیدنی" , img:product14, price:"2000000", percent:"11%"} ,
        {id:15 , title:"محصول پانزدهم", category:"کالای سوپرمارکتی" , type:"غذا" , img:product15, price:"2000000", percent:"28%"} ,
        {id:16 , title:"محصول شانزدهم", category:"کالای سوپرمارکتی" , type:"پنیر" , img:product16, price:"2000000", percent:"15%"} ,
        {id:17 , title:"محصول هفدهم", category:"کالای سوپرمارکتی" , type:"چای" , img:product17, price:"2000000", percent:"14%"} ,
        {id:18 , title:"محصول هجدهم", category:"کالای سوپرمارکتی" , type:"روغن" , img:product18, price:"2000000", percent:"9%"} ,
        {id:19 , title:"محصول نوزدهم", category:"کالای دیجیتال" , type:"کیف و کاور گوشی" , img:product19, price:"2000000", percent:"50%"} ,
        {id:20 , title:"محصول بیستم", category:"کالای دیجیتال" , type:"کیف و کاور گوشی" , img:product20, price:"2000000", percent:"20%"} ,
        {id:21 , title:"محصول بیست و یکم", category:"کالای دیجیتال" , type:"کیف و کاور گوشی" , img:product21, price:"2000000", percent:"33%"} ,
        {id:22 , title:"محصول بیست و دوم", category:"کالای دیجیتال" , type:"کیف و کاور گوشی" , img:product22, price:"2000000", percent:"7%"} ,
        {id:23 , title:"محصول بیست و سوم", category:"کالای دیجیتال" , type:"هدفون،هدست و هندزفری" , img:product23, price:"2000000", percent:"8%"} ,
        {id:24 , title:"محصول بیست و چهارم", category:"کالای دیجیتال" , type:"هدفون،هدست و هندزفری" , img:product24, price:"2000000", percent:"15%"} ,
        {id:25 , title:"محصول بیست و پنجم", category:"کالای دیجیتال" , type:"هدفون،هدست و هندزفری" , img:product25, price:"2000000", percent:"5%"} ,
        {id:26 , title:"محصول بیست و ششم", category:"کالای دیجیتال" , type:"هدفون،هدست و هندزفری" , img:product26, price:"2000000", percent:"2%"} ,
        {id:27 , title:"محصول بیست و هفتم", category:"کالای دیجیتال" , type:"گوشی موبایل" , img:product27, price:"2000000", percent:"23%"} ,
        {id:28 , title:"محصول بیست و هشتم", category:"کالای دیجیتال" , type:"گوشی موبایل" , img:product28, price:"2000000", percent:"11%"} ,
        {id:29 , title:"محصول بیست و نهم", category:"کالای دیجیتال" , type:"گوشی موبایل" , img:product29, price:"2000000", percent:"16%"} ,
        {id:30 , title:"محصول سی ام", category:"کالای دیجیتال" , type:"گوشی موبایل" , img:product30, price:"2000000", percent:"7%"} ,
        {id:31 , title:"محصول سی و یکم", category:"کالای دیجیتال" , type:"ساعت هوشمند" , img:product31, price:"2000000", percent:"8%"} ,
        {id:32 , title:"محصول سی و دوم", category:"کالای دیجیتال" , type:"ساعت هوشمند" , img:product32, price:"2000000", percent:"10%"} ,
        {id:33 , title:"محصول سی و سوم", category:"کالای دیجیتال" , type:"ساعت هوشمند" , img:product33, price:"2000000", percent:"20%"} ,
        {id:34 , title:"محصول سی و چهارم", category:"کالای دیجیتال" , type:"ساعت هوشمند" , img:product34, price:"2000000", percent:"24%"} ,
    ]

const productReducer = (state=initialState,action) => {
    return state ;
}

export default productReducer ;