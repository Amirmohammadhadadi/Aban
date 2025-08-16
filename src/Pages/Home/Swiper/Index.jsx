import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../Swiper/Style/styleSwiper.css'
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CheckIcon from '@mui/icons-material/Check';

import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
export default function Swiper1() {
    return (
        <>
            <div className="swiper-container">
                <Swiper
                    style={{ height: "100%" }}
                    effect="cards"
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]}
                    // autoplay={{
                    //     delay: 2000, // هر 2 ثانیه ورق بخوره
                    //     disableOnInteraction: false// بعد از اسکرول دستی ادامه بده
                    // }}
                    speed={700}
                    className="mySwiper"
                >
                    <SwiperSlide className="slide slide1" style={{ display: "flex", flexDirection: "column", position: 'relative', height: "100%", gap: '10px' }}

                    >

                        <Box width={'100%'} height={'12px'} bgcolor={'#2563EB'} sx={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
                        </Box>
                        <Box height={'60px'}><Box width={'65px'} height={'65px'} borderRadius={'50%'} bgcolor={'rgb(219 234 254)'} sx={{ position: 'absolute', left: '95%', transform: 'translateX(-95%)' }}> <svg style={{ height: '32px', width: '32px', position: 'absolute', left: '61%', top: "50%", color: "rgb(37 99 235 )", transform: 'translate(-68%,-50%)' }} xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        </Box>
                        </Box>
                        <Box flex={1}
                            display={'flex'} flexDirection={"column"} paddingInline={1} gap={1}

                            sx={{ direction: "rtl" }}
                        >
                            <Typography fontFamily={"RD2"} variant='h3' fontSize={'20px'} fontWeight={700} color='black' sx={{ direction: "rtl" }}>
                                کاردرمانی کودکان
                            </Typography>
                            <Typography sx={{ color: 'rgb( 75 85 99 )', direction: 'rtl' }} fontFamily={'RD2'} >خدمات تخصصی برای کودکان با تأخیر رشدی، اختلالات حسی-حرکتی، اوتیسم و مشکلات یادگیری</Typography>
                            <Typography sx={{ color: 'rgb( 75 85 99 )', direction: 'rtl' }} fontFamily={'RD2'} >یکپارچگی حسی </Typography>
                            <Typography sx={{ color: 'rgb( 75 85 99 )', direction: 'rtl' }} fontFamily={'RD2'} >مهارت‌های حرکتی ظریف</Typography>
                            <Typography sx={{ color: 'rgb( 75 85 99 )', direction: 'rtl' }} fontFamily={'RD2'} >مهارت‌های روزمره زندگی</Typography>
                        </Box>
                        <Box flex={1} sx={{ direction: 'rtl' }}>
                            <Button variant='text' sx={{ width: "100px", fontSize: '20px' }}  >
                                نوبت دهی
                            </Button>
                        </Box>


                    </SwiperSlide>
                    <SwiperSlide className="slide slide2" style={{ display: "flex", flexDirection: "column", position: 'relative', height: "100%", gap: '10px' }}

                    >

                        <Box width={'100%'} height={'12px'} bgcolor={'#2563EB'} sx={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
                        </Box>
                        <Box height={'60px'}><Box width={'65px'} height={'65px'} borderRadius={'50%'} bgcolor={'rgb(219 234 254)'} sx={{ position: 'absolute', left: '95%', transform: 'translateX(-95%)' }}>
                            <svg style={{ height: '32px', width: '32px', position: 'absolute', left: '61%', top: "50%", color: "rgb(37 99 235 )", transform: 'translate(-68%,-50%)' }} xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </Box>
                        </Box>
                        <Box flex={1}
                            display={'flex'} flexDirection={"column"} paddingInline={1} gap={1}

                            sx={{ direction: "rtl" }}
                        >
                            <Typography fontFamily={"RD2"} variant='h3' fontSize={'20px'} fontWeight={700} color='black' sx={{ direction: "rtl" }}>
                                کاردرمانی بزرگسالان
                            </Typography>
                            <Typography sx={{ color: 'rgb( 75 85 99 )', direction: 'rtl' }} fontFamily={'RD2'} >خدمات توانبخشی برای بزرگسالان با آسیب‌های نورولوژیک، ارتوپدیک و اختلالات عصبی-عضلانی

                            </Typography>
                            <Typography sx={{ color: 'rgb( 75 85 99 )', direction: 'rtl' }} fontFamily={'RD2'} >توانبخشی پس از سکته
                            </Typography>
                            <Typography sx={{ color: 'rgb( 75 85 99 )', direction: 'rtl' }} fontFamily={'RD2'} >درمان آسیب‌های دست
                            </Typography>
                            <Typography sx={{ color: 'rgb( 75 85 99 )', direction: 'rtl' }} fontFamily={'RD2'} >بازتوانی شناختی</Typography>
                        </Box>
                        <Box flex={1} sx={{ direction: 'rtl' }}>
                            <Button variant='text' sx={{ width: "100px", fontSize: '20px' }}  >
                                نوبت دهی
                            </Button>
                        </Box>


                    </SwiperSlide>
                    <SwiperSlide className="slide slide3" style={{ display: "flex", flexDirection: "column", position: 'relative', height: "100%", gap: '10px' }}

                    >

                        <Box width={'100%'} height={'12px'} bgcolor={'#2563EB'} sx={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
                        </Box>
                        <Box height={'60px'}><Box width={'65px'} height={'65px'} borderRadius={'50%'} bgcolor={'rgb(219 234 254)'} sx={{ position: 'absolute', left: '95%', transform: 'translateX(-95%)' }}>
                            <svg style={{ width: '50px', height: "50px", position: 'absolute', left: '61%', top: "50%", color: "rgb(37 99 235 )", transform: 'translate(-68%,-50%)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">

                                <circle cx="32" cy="12" r="6" fill="rgb(37 99 235 )" />


                                <line x1="32" y1="18" x2="32" y2="40" stroke="rgb(37 99 235 )" stroke-width="4" stroke-linecap="round" />


                                <line x1="32" y1="22" x2="44" y2="34" stroke="rgb(37 99 235 )" stroke-width="3" stroke-linecap="round" />


                                <line x1="32" y1="40" x2="24" y2="56" stroke="rgb(37 99 235 )" stroke-width="3" stroke-linecap="round" />
                                <line x1="32" y1="40" x2="36" y2="56" stroke="rgb(37 99 235 )" stroke-width="3" stroke-linecap="round" />


                                <line x1="44" y1="34" x2="44" y2="56" stroke="rgb(37 99 235 )" stroke-width="3" stroke-linecap="round" />
                            </svg>

                        </Box>
                        </Box>
                        <Box flex={1}
                            display={'flex'} flexDirection={"column"} paddingInline={1} gap={1}

                            sx={{ direction: "rtl" }}
                        >
                            <Typography fontFamily={"RD2"} variant='h3' fontSize={'20px'} fontWeight={700} color='black' sx={{ direction: "rtl" }}>
                                کاردرمانی سالمندان

                            </Typography>
                            <Typography sx={{ color: 'rgb( 75 85 99 )', direction: 'rtl' }} fontFamily={'RD2'} >خدمات ویژه برای سالمندان با هدف حفظ استقلال و بهبود کیفیت زندگی</Typography>
                            <Typography sx={{ color: 'rgb( 75 85 99 )', direction: 'rtl' }} fontFamily={'RD2'} >تقویت تعادل و پیشگیری از سقوط
                            </Typography>
                            <Typography sx={{ color: 'rgb( 75 85 99 )', direction: 'rtl' }} fontFamily={'RD2'} >مدیریت بیماری‌های مزمن
                            </Typography>
                            <Typography sx={{ color: 'rgb( 75 85 99 )', direction: 'rtl' }} fontFamily={'RD2'} >تطابق محیط زندگی
                            </Typography>
                        </Box>
                        <Box flex={1} sx={{ direction: 'rtl' }}>
                            <Button variant='text' sx={{ width: "100px", fontSize: '20px' }}  >
                                نوبت دهی
                            </Button>
                        </Box>


                    </SwiperSlide>
                    <SwiperSlide className="slide slide3" style={{ display: "flex", flexDirection: "column", position: 'relative', height: "100%", gap: '10px' }}

                    >

                        <Box width={'100%'} height={'12px'} bgcolor={'#2563EB'} sx={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
                        </Box>
                        <Box height={'60px'}><Box width={'65px'} height={'65px'} borderRadius={'50%'} bgcolor={'rgb(219 234 254)'} sx={{ position: 'absolute', left: '95%', transform: 'translateX(-95%)' }}> <svg style={{ height: '32px', width: '32px', position: 'absolute', left: '61%', top: "50%", color: "rgb(37 99 235 )", transform: 'translate(-68%,-50%)' }} xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        </Box>
                        </Box>
                        <Box flex={1}
                            display={'flex'} flexDirection={"column"} paddingInline={1} gap={1}

                            sx={{ direction: "rtl" }}
                        >
                            <Typography fontFamily={"RD2"} variant='h3' fontSize={'20px'} fontWeight={700} color='black' sx={{ direction: "rtl" }}>
                                گفتاردرمانی

                            </Typography>
                            <Typography sx={{ color: 'rgb( 75 85 99 )', direction: 'rtl' }} fontFamily={'RD2'} >ارزیابی و درمان مشکلات ارتباطی و اختلالات گفتاری، زبانی و بلع </Typography>
                            <Typography sx={{ color: 'rgb( 75 85 99 )', direction: 'rtl' }} fontFamily={'RD2'} > بهبود مهارت های گفتاری
                            </Typography>
                            <Typography sx={{ color: 'rgb( 75 85 99 )', direction: 'rtl' }} fontFamily={'RD2'} >درمان مشکلات  تلفظ
                            </Typography>
                            <Typography sx={{ color: 'rgb( 75 85 99 )', direction: 'rtl' }} fontFamily={'RD2'} >تمرینات بلع
                            </Typography>
                        </Box>
                        <Box flex={1} sx={{ direction: 'rtl' }}>
                            <Button variant='text' sx={{ width: "100px", fontSize: '20px' }}  >
                                نوبت دهی
                            </Button>
                        </Box>


                    </SwiperSlide>

                </Swiper>
            </div >
        </>
    )
}



