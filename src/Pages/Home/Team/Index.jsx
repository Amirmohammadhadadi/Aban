import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, Stack, Typography } from '@mui/material';
import logo from '../../../assets/Imge/logo.jpg'

export default function Team() {
    return (
        <>
            <Box display={'flex'} flexDirection={'column'} height={'10%'} width={'100%'} p={1} position={'relative'} >
                <Box position={'relative'} display={'flex'} flexDirection={"column"} width={'100%'} height={'115px'} pt={2} ><Typography variant='h2' fontFamily={"RD"} fontSize={{ xl: '30px', lg: '30px', md: '27px', sm: '27px', xs: '22px' }} fontWeight={'800'} position={'absolute'} left={'50%'} sx={{ transform: 'translateX(-50% )' }} >تیم متخصص ما
                </Typography>
                    <Box height={'4px'} width={'120px'} bgcolor={'blue'} position={'absolute'} left={'50%'} top={"50%"} sx={{ transform: 'translate(-50%,-70% )' }} ></Box>
                    <Typography width={'100%'} variant='p' fontSize={{ xl: '16px', lg: '16px', md: '16px', sm: '13px', xs: '13px' }} position={'absolute'} left={'50%'} top={'80%'} sx={{ textAlign: 'center', transform: 'translate(-50% ,-80% )' }} color=' rgb(76, 97, 126)' >تیم ما متشکل از متخصصین مجرب و با تجربه در زمینه کاردرمانی است که با عشق و تعهد به بیماران خدمت می‌کنند</Typography>
                </Box>
            </Box>
            <br /><br />

            <Swiper

                style={{ height: '420px', paddingBlock: "20px", paddingInline: '8px', width: "%", transition: ' all 0.5s ease' }}

                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={15}
                slidesPerView={3}
                // navigation
                speed={900}
                loop={true}
                pagination={{ clickable: true }}

                // scrollbar={{ draggable: true }}
                //  onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('amir')}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@1.00': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    '@1.50': {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
            >
                <SwiperSlide className='cardhover' style={{ width: '320px', height: "360px", backgroundColor: '#eff6ff', borderRadius: "0.75rem", paddingInline: "8px ", transition: ' all 0.5s ease' }}   >
                    <Stack p={2} gap={'10px'}>
                        <Box display={'flex'} justifyContent={'center'} justifyItems={'center'} flex={1}>
                            <img src={logo} alt="" style={{ width: "120px", height: "120px", borderRadius: "50%" }} />
                        </Box>
                        <Stack textAlign={'center'} gap={'5px'} >
                            <Typography textAlign={'center'} variant='h4' fontSize={'20px'} fontWeight={700} fontFamily={'RD2'}>دکتر سعید حدادی</Typography>
                            <Typography fontFamily={"RD2"} fontSize={'18px'} fontWeight={'500'} color='rgb(37 99 235)'>کاردرمانگر</Typography>
                            <Typography fontFamily={"RD2"} fontSize={'17px'} color='rgb(75 85 99)'>
                                متخصص و مدیر کلینیک توانبخشی آبان
                            </Typography>
                            <Box display={'flex'} justifyItems={'center'} justifyContent={'center'} >
                                <Typography fontFamily={"RD2"} fontSize={'14px'} color='rgb(75 85 99)'>سابقه ده سال کار بالینی در زمینه کودکان و بزرگسالان</Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px', width: "16px", height: "16px", color: "rgb(59 130 246)" }} class="h-4 w-4 text-blue-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Box>
                            <Box display={'flex'} justifyContent={'center'} justifyItems={'center'} gap={1} >
                                <Typography fontFamily={"RD2"} fontSize={'14px'} color='rgb(75 85 99)'>درمانگر تخصصی آسیب های عضلانی-اسکلتی</Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px', width: "16px", height: "16px", color: "rgb(59 130 246)" }} class="h-4 w-4 text-blue-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Box>
                            <Box display={'flex'} justifyContent={'center'} justifyItems={'center'} gap={1} >
                                <Typography fontFamily={"RD2"} fontSize={'14px'} color='rgb(75 85 99)'>نوروتراپیست</Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px', width: "16px", height: "16px", color: "rgb(59 130 246)" }} class="h-4 w-4 text-blue-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Box>


                        </Stack>

                    </Stack>
                </SwiperSlide>
                <SwiperSlide className='cardhover' style={{ width: '320px', height: "360px", backgroundColor: '#dcfce7', borderRadius: "0.75rem", transition: ' all 0.5s ease' }}  >
                    <Stack p={2} gap={'10px'}>
                        <Box display={'flex'} justifyContent={'center'} justifyItems={'center'} flex={1}>
                            <img src={logo} alt="" style={{ width: "120px", height: "120px", borderRadius: "50%" }} />
                        </Box>
                        <Stack textAlign={'center'} gap={'5px'} >
                            <Typography textAlign={'center'} variant='h4' fontSize={'20px'} fontWeight={700} fontFamily={'RD2'}>دکتر هانی قاسمی</Typography>
                            <Typography fontFamily={"RD2"} fontSize={'18px'} fontWeight={'500'} color='rgb(22 163 74)'>گفتار درمان</Typography>
                            <Typography fontFamily={"RD2"} fontSize={'17px'} color='rgb(75 85 99)'>
                                درمان اختلالات گفتاری، زبانی، بلع و تغذیه
                            </Typography>
                            <Box display={'flex'} justifyItems={'center'} justifyContent={'center'} >
                                <Typography fontFamily={"RD2"} fontSize={'14px'} color='rgb(75 85 99)'> سابقه هفت سال کاربالینی درزمینه اختلالات گفتاری، زبانیو تغذیه </Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px', width: "16px", height: "16px", color: "rgb(34 197 94)" }} class="h-4 w-4 text-blue-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Box>
                            <Box display={'flex'} justifyContent={'center'} justifyItems={'center'} gap={1} >
                                <Typography fontFamily={"RD2"} fontSize={'14px'} color='rgb(75 85 99)'>رفع  لکنت زبان</Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px', width: "16px", height: "16px", color: "rgb(34 197 94)" }} class="h-4 w-4 text-blue-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Box>
                            <Box display={'flex'} justifyContent={'center'} justifyItems={'center'} gap={1} >
                                <Typography fontFamily={"RD2"} fontSize={'14px'} color='rgb(75 85 99)'>رفع اختلالات بلع</Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px', width: "16px", height: "16px", color: "rgb(34 197 94)" }} class="h-4 w-4 text-blue-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Box>


                        </Stack>

                    </Stack>
                </SwiperSlide>


                <SwiperSlide className='cardhover' style={{ width: '320px', height: "360px", backgroundColor: '#fce7f3', borderRadius: "0.75rem", transition: ' all 0.5s ease' }}  >
                    <Stack p={2} gap={'10px'}>
                        <Box display={'flex'} justifyContent={'center'} justifyItems={'center'} flex={1}>
                            <img src={logo} alt="" style={{ width: "120px", height: "120px", borderRadius: "50%" }} />
                        </Box>
                        <Stack textAlign={'center'} gap={'5px'} >
                            <Typography textAlign={'center'} variant='h4' fontSize={'20px'} fontWeight={700} fontFamily={'RD2'}>دکتر سمانه باقری</Typography>
                            <Typography fontFamily={"RD2"} fontSize={'18px'} fontWeight={'500'} color='rgb(147 51 234 )'>کاردرمانگر</Typography>
                            <Typography fontFamily={"RD2"} fontSize={'17px'} color='rgb(75 85 99)'>
                                جسمی حرکتی کودکان و اختلالت ذهنی کودکان
                            </Typography>
                            <Box display={'flex'} justifyItems={'center'} justifyContent={'center'} >
                                <Typography fontFamily={"RD2"} fontSize={'14px'} color='rgb(75 85 99)'> سابقه ده سال کار بالینی در حیطه کودکان</Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px', width: "16px", height: "16px", color: "rgb(168 85 247 )" }} class="h-4 w-4 text-blue-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Box>
                            <Box display={'flex'} justifyContent={'center'} justifyItems={'center'} gap={1} >
                                <Typography fontFamily={"RD2"} fontSize={'14px'} color='rgb(75 85 99)'>رفع اختلالات یادگیری</Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px', width: "16px", height: "16px", color: "rgb(168 85 247)" }} class="h-4 w-4 text-blue-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Box>
                            <Box display={'flex'} justifyContent={'center'} justifyItems={'center'} gap={1} >
                                <Typography fontFamily={"RD2"} fontSize={'14px'} color='rgb(75 85 99)'>کار با کودکان اتیسم</Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px', width: "16px", height: "16px", color: "rgb(168 85 247)" }} class="h-4 w-4 text-blue-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Box>


                        </Stack>

                    </Stack>
                </SwiperSlide>
                <SwiperSlide className='cardhover' style={{ width: '320px', height: "360px", backgroundColor: '#eff6ff', borderRadius: "0.75rem", transition: ' all 0.5s ease' }}  >
                    <Stack p={2} gap={'10px'}>
                        <Box display={'flex'} justifyContent={'center'} justifyItems={'center'} flex={1}>
                            <img src={logo} alt="" style={{ width: "120px", height: "120px", borderRadius: "50%" }} />
                        </Box>
                        <Stack textAlign={'center'} gap={'5px'} >
                            <Typography textAlign={'center'} variant='h4' fontSize={'20px'} fontWeight={700} fontFamily={'RD2'}>دکتر مسلم مرادی زاده</Typography>
                            <Typography fontFamily={"RD2"} fontSize={'18px'} fontWeight={'500'} color='rgb(37 99 235)'>کاردرمانگر</Typography>
                            <Typography fontFamily={"RD2"} fontSize={'17px'} color='rgb(75 85 99)'>
                                درمان در حیطه نورولوژی کودکان و بزرگسالان
                            </Typography>
                            <Box display={'flex'} justifyItems={'center'} justifyContent={'center'} >
                                <Typography fontFamily={"RD2"} fontSize={'14px'} color='rgb(75 85 99)'>سابقه هشت سال کار بالینی در زمینه کودکان و بزرگسالان</Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px', width: "16px", height: "16px", color: "rgb(59 130 246)" }} class="h-4 w-4 text-blue-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Box>
                            <Box display={'flex'} justifyContent={'center'} justifyItems={'center'} gap={1} >
                                <Typography fontFamily={"RD2"} fontSize={'14px'} color='rgb(75 85 99)'>درمانگر تخصصی آسیب های اسکلتی</Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px', width: "16px", height: "16px", color: "rgb(59 130 246)" }} class="h-4 w-4 text-blue-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Box>
                            <Box display={'flex'} justifyContent={'center'} justifyItems={'center'} gap={1} >
                                <Typography fontFamily={"RD2"} fontSize={'14px'} color='rgb(75 85 99)'>درمان  دیسک بین مهره ای</Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px', width: "16px", height: "16px", color: "rgb(59 130 246)" }} class="h-4 w-4 text-blue-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Box>


                        </Stack>

                    </Stack>
                </SwiperSlide>
                <SwiperSlide className='cardhover' style={{ width: '320px', height: "360px", backgroundColor: '#f3e8ff', borderRadius: "0.75rem", transition: ' all 0.5s ease' }}  >
                    <Stack p={2} gap={'10px'}>
                        <Box display={'flex'} justifyContent={'center'} justifyItems={'center'} flex={1}>
                            <img src={logo} alt="" style={{ width: "120px", height: "120px", borderRadius: "50%" }} />
                        </Box>
                        <Stack textAlign={'center'} gap={'5px'} >
                            <Typography textAlign={'center'} variant='h4' fontSize={'20px'} fontWeight={700} fontFamily={'RD2'}>دکتر فاطمه معطی</Typography>
                            <Typography fontFamily={"RD2"} fontSize={'18px'} fontWeight={'500'} color='rgb(219 39 119 )'>کاردرمانگر</Typography>
                            <Typography fontFamily={"RD2"} fontSize={'17px'} color='rgb(75 85 99)'>
                                اختلالات ارتوپدی و انحرافات مفصلی
                            </Typography>
                            <Box display={'flex'} justifyItems={'center'} justifyContent={'center'} >
                                <Typography fontFamily={"RD2"} fontSize={'14px'} color='rgb(75 85 99)'>سابقه ۳سال کار بالینی در زمینه ی اختلالات ارتوپدی</Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px', width: "16px", height: "16px", color: "rgb(236 72 153)" }} class="h-4 w-4 text-blue-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Box>
                            <Box display={'flex'} justifyContent={'center'} justifyItems={'center'} gap={1} >
                                <Typography fontFamily={"RD2"} fontSize={'14px'} color='rgb(75 85 99)'>درمانگر تخصصی آرتریت مفصلی</Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px', width: "16px", height: "16px", color: "rgb(236 72 153)" }} class="h-4 w-4 text-blue-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Box>
                            <Box display={'flex'} justifyContent={'center'} justifyItems={'center'} gap={1} >
                                <Typography fontFamily={"RD2"} fontSize={'14px'} color='rgb(75 85 99)'>درمانگر تخصصی شانه منجمد</Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '4px', width: "16px", height: "16px", color: "rgb(236 72 153)" }} class="h-4 w-4 text-blue-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Box>


                        </Stack>

                    </Stack>
                </SwiperSlide>
            </Swiper >

        </>
    )
}
