import { Box, Stack, Typography, Button, Avatar, Modal } from '@mui/material'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ModalComment from './Modal/Index';

export default function Comments() {
    const [open, setOpen] = useState(false)
    const handelOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (

        <>
            <Box height={'75vh'} width={"100%"} >
                <Box display={'flex'} p={1} flexDirection={"column"} width={'100%'} height={'115px'} pt={1} sx={{ justifyContent: 'center', justifyItems: 'center', textAlign: 'center', gap: "12px" }}>
                    <Box> <Typography variant='h2' fontFamily={"RD"} fontSize={{ xl: '30px', lg: '30px', md: '27px', sm: '27px', xs: '22px' }} fontWeight={'800'} >نظرات شما
                    </Typography></Box>
                    <Box> <Typography width={'100%'} variant='p' sx={{ transform: 'translate(-50% ,-80% )' }} color=' rgb(76, 97, 126)' >نظرات بیماران درباره کلینیک کاردرمانی آبان</Typography></Box>
                </Box>

                <Swiper

                    style={{ height: '350px', paddingTop: "30px", paddingBottom: "30px", paddingInline: '8px', width: "85%", transition: 'all 0.5s ease' }}

                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={15}
                    slidesPerView={3}
                    // navigation
                    speed={900}
                    loop={true}
                    // pagination={{ clickable: true }}

                    // scrollbar={{ draggable: true }}
                    //  onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('amir')}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,

                        },
                        '@0.75': {
                            slidesPerView: 1,

                        },
                        '@1.00': {
                            slidesPerView: 2,

                        },
                        '@1.50': {
                            slidesPerView: 3,

                        },
                    }}
                >
                    <SwiperSlide   >
                        <Stack boxShadow={' 0 2px 7px 2px rgb(0 0 0 / 0.1)'} sx={{ transition: 'all 0.5s ease' }} className='cardhover' borderRadius={4} height={"250px"} p={3} gap={2} >

                            <Box display={'flex'} justifyContent={'left'} gap={1} alignContent={'center'}>
                                <Box flex={1} display={'flex'} flexDirection={'column'}   >
                                    <Typography fontFamily={"RD2"} fontSize={"18px"} fontWeight={600} sx={{ direction: 'ltr' }}>امیر محمد </Typography>
                                    <Typography fontFamily={"RD2"} fontSize={'14px'} sx={{ direction: 'ltr' }} color='rgb(75 85 99)'>پدر کودک اتیسم</Typography>
                                </Box>
                                <Avatar />
                            </Box>
                            <Box sx={{ direction: "ltr" }}>
                                پسرم با مشکلات حسی-حرکتی به کلینیک آبان مراجعه کرد. بعد از ۶ ماه درمان، پیشرفت چشمگیری داشته و اکنون می‌تواند فعالیت‌های روزمره را بهتر انجام دهد. از تیم متخصص کلینیک بسیار سپاسگزارم.
                            </Box>



                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide   >
                        <Stack boxShadow={'0 2px 7px 2px rgb(0 0 0 / 0.1)'} sx={{ transition: 'all 0.5s ease' }} className='cardhover' borderRadius={4} height={"250px"} p={3} gap={2} >

                            <Box display={'flex'} justifyContent={'left'} gap={1} alignContent={'center'}>
                                <Box flex={1} display={'flex'} flexDirection={'column'}   >
                                    <Typography fontFamily={"RD2"} fontSize={"18px"} fontWeight={600} sx={{ direction: 'ltr' }}>امیر محمد </Typography>
                                    <Typography fontFamily={"RD2"} fontSize={'14px'} sx={{ direction: 'ltr' }} color='rgb(75 85 99)'>پدر کودک اتیسم</Typography>
                                </Box>
                                <Avatar />
                            </Box>
                            <Box sx={{ direction: "ltr" }}>
                                پسرم با مشکلات حسی-حرکتی به کلینیک آبان مراجعه کرد. بعد از ۶ ماه درمان، پیشرفت چشمگیری داشته و اکنون می‌تواند فعالیت‌های روزمره را بهتر انجام دهد. از تیم متخصص کلینیک بسیار سپاسگزارم.
                            </Box>



                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide   >
                        <Stack boxShadow={'0 2px 7px 2px rgb(0 0 0 / 0.1)'} sx={{ transition: 'all 0.5s ease' }} className='cardhover' borderRadius={4} height={"250px"} p={3} gap={2} >

                            <Box display={'flex'} justifyContent={'left'} gap={1} alignContent={'center'}>
                                <Box flex={1} display={'flex'} flexDirection={'column'}   >
                                    <Typography fontFamily={"RD2"} fontSize={"18px"} fontWeight={600} sx={{ direction: 'ltr' }}>امیر محمد </Typography>
                                    <Typography fontFamily={"RD2"} fontSize={'14px'} sx={{ direction: 'ltr' }} color='rgb(75 85 99)'>پدر کودک اتیسم</Typography>
                                </Box>
                                <Avatar />
                            </Box>
                            <Box sx={{ direction: "ltr" }}>
                                پسرم با مشکلات حسی-حرکتی به کلینیک آبان مراجعه کرد. بعد از ۶ ماه درمان، پیشرفت چشمگیری داشته و اکنون می‌تواند فعالیت‌های روزمره را بهتر انجام دهد. از تیم متخصص کلینیک بسیار سپاسگزارم.
                            </Box>



                        </Stack>
                    </SwiperSlide>      <SwiperSlide style={{ height: '250px', backgroundColor: '#f3f3f3' }} >Slide 3</SwiperSlide>


                </Swiper >
                <br />
                <Box
                    position={'relative'} width={'100%'} pt={2}>
                    <Button onClick={handelOpen} variant='contained' sx={{ width: "150px", height: '50px', position: 'absolute', left: "50%", transform: 'translateX(-50%)', fontFamily: 'RD2' }}  >ثبت نظر</Button> </Box>
                <Modal open={open} onClose={() => handleClose()}><ModalComment /></Modal>

            </Box>
        </>
    )
}
