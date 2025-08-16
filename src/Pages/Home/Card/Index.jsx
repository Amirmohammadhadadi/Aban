import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Swiper1 from '../Swiper/Index';
export default function Cart() {
    return (
        <>




            {/* <Card sx={{ width: { xl: '391px', sm: "391px", xs: '320px' }, height: "356px", border: '0px solid ', borderRadius: "8px" }}>
                <CardMedia>
                    <Box position={'relative'} height={'60px'}> <Avatar sx={{ top: "15%", right: '4%', position: 'absolute' }} /></Box>
                </CardMedia>
                <CardContent>
                    <Stack gap={2} >
                        <Typography sx={{ direction: "rtl" }} variant='h3' fontFamily={'RD'} fontSize={{ xl: '17px', lg: '17px', md: '17px', sm: '15px', xs: '15px' }}>کاردرمانی کودکان</Typography>
                        <Typography variant='p' sx={{ direction: "rtl" }} fontSize={{ xl: '15px', lg: '15px', md: '15px', sm: '13px', xs: '13px' }} color=' rgb(76, 97, 126)' >خدمات تخصصی برای کودکان با تأخیر رشدی، اختلالات حسی-حرکتی، اوتیسم و مشکلات یادگیری</Typography>
                    </Stack>
                    <Stack>
                        <Grid container width={'100%'} height={'100px'} >
                            <Grid size={12}> <Box position={'relative'}> <Typography sx={{ direction: 'rtl' }} fontSize={{ xl: '16px', sm: "14px", xs: '12px' }} fontFamily={'RD2'} position={'absolute'} top={'10%'} right={'3%'} color=' rgb(76, 97, 126)' > تجهیزات پیشرفته </Typography>  </Box></Grid>
                            <Grid size={12}> <Box position={'relative'}> <Typography sx={{ direction: 'rtl' }} fontSize={{ xl: '16px', sm: "14px", xs: '12px' }} fontFamily={'RD2'} position={'absolute'} top={'10%'} right={'3%'} color=' rgb(76, 97, 126)' > متخصصین مجرب </Typography>  </Box></Grid>
                            <Grid size={12}> <Box position={'relative'}> <Typography sx={{ direction: 'rtl' }} fontSize={{ xl: '16px', sm: "14px", xs: '12px' }} fontFamily={'RD2'} position={'absolute'} top={'10%'} right={'3%'} color=' rgb(76, 97, 126)' > محیط آرام و دلنشین </Typography>  </Box></Grid>
                            <Grid size={12}> <Box position={'relative'}> <Typography sx={{ direction: 'rtl' }} fontSize={{ xl: '16px', sm: "14px", xs: '12px' }} fontFamily={'RD2'} position={'absolute'} top={'10%'} right={'3%'} color=' rgb(76, 97, 126)' >برنامه‌های شخصی‌سازی شده
                            </Typography>  </Box></Grid>

                        </Grid>
                    </Stack>
                </CardContent>
                <CardActions sx={{ position: "relative" }}>
                    <Button size='medium' sx={{ position: 'absolute', right: '5%', fontFamily: "RD", }} >
                        دریافت نوبت
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ width: { xl: '391px', sm: "391px", xs: '320px' }, height: "356px", border: '0px solid ', borderRadius: "8px" }}>
                <CardMedia>
                    <Box position={'relative'} height={'60px'}> <Avatar sx={{ top: "15%", right: '4%', position: 'absolute' }} /></Box>
                </CardMedia>
                <CardContent>
                    <Stack gap={2} >
                        <Typography sx={{ direction: "rtl" }} variant='h3' fontFamily={'RD'} fontSize={{ xl: '17px', lg: '17px', md: '17px', sm: '15px', xs: '15px' }}>کاردرمانی کودکان</Typography>
                        <Typography variant='p' sx={{ direction: "rtl" }} fontSize={{ xl: '15px', lg: '15px', md: '15px', sm: '13px', xs: '13px' }} color=' rgb(76, 97, 126)' >خدمات تخصصی برای کودکان با تأخیر رشدی، اختلالات حسی-حرکتی، اوتیسم و مشکلات یادگیری</Typography>
                    </Stack>
                    <Stack>
                        <Grid container width={'100%'} height={'100px'} >
                            <Grid size={12}> <Box position={'relative'}> <Typography sx={{ direction: 'rtl' }} fontSize={{ xl: '16px', sm: "14px", xs: '12px' }} fontFamily={'RD2'} position={'absolute'} top={'10%'} right={'3%'} color=' rgb(76, 97, 126)' > تجهیزات پیشرفته </Typography>  </Box></Grid>
                            <Grid size={12}> <Box position={'relative'}> <Typography sx={{ direction: 'rtl' }} fontSize={{ xl: '16px', sm: "14px", xs: '12px' }} fontFamily={'RD2'} position={'absolute'} top={'10%'} right={'3%'} color=' rgb(76, 97, 126)' > متخصصین مجرب </Typography>  </Box></Grid>
                            <Grid size={12}> <Box position={'relative'}> <Typography sx={{ direction: 'rtl' }} fontSize={{ xl: '16px', sm: "14px", xs: '12px' }} fontFamily={'RD2'} position={'absolute'} top={'10%'} right={'3%'} color=' rgb(76, 97, 126)' > محیط آرام و دلنشین </Typography>  </Box></Grid>
                            <Grid size={12}> <Box position={'relative'}> <Typography sx={{ direction: 'rtl' }} fontSize={{ xl: '16px', sm: "14px", xs: '12px' }} fontFamily={'RD2'} position={'absolute'} top={'10%'} right={'3%'} color=' rgb(76, 97, 126)' >برنامه‌های شخصی‌سازی شده
                            </Typography>  </Box></Grid>

                        </Grid>
                    </Stack>
                </CardContent>
                <CardActions sx={{ position: "relative" }}>
                    <Button size='medium' sx={{ position: 'absolute', right: '5%', fontFamily: "RD", }} >
                        دریافت نوبت
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ width: { xl: '391px', sm: "391px", xs: '320px' }, height: "356px", border: '0px solid ', borderRadius: "8px" }}>
                <CardMedia>
                    <Box position={'relative'} height={'60px'}> <Avatar sx={{ top: "15%", right: '4%', position: 'absolute' }} /></Box>
                </CardMedia>
                <CardContent>
                    <Stack gap={2} >
                        <Typography sx={{ direction: "rtl" }} variant='h3' fontFamily={'RD'} fontSize={{ xl: '17px', lg: '17px', md: '17px', sm: '15px', xs: '15px' }}>کاردرمانی کودکان</Typography>
                        <Typography variant='p' sx={{ direction: "rtl" }} fontSize={{ xl: '15px', lg: '15px', md: '15px', sm: '13px', xs: '13px' }} color=' rgb(76, 97, 126)' >خدمات تخصصی برای کودکان با تأخیر رشدی، اختلالات حسی-حرکتی، اوتیسم و مشکلات یادگیری</Typography>
                    </Stack>
                    <Stack>
                        <Grid container width={'100%'} height={'100px'} >
                            <Grid size={12}> <Box position={'relative'}> <Typography sx={{ direction: 'rtl' }} fontSize={{ xl: '16px', sm: "14px", xs: '12px' }} fontFamily={'RD2'} position={'absolute'} top={'10%'} right={'3%'} color=' rgb(76, 97, 126)' > تجهیزات پیشرفته </Typography>  </Box></Grid>
                            <Grid size={12}> <Box position={'relative'}> <Typography sx={{ direction: 'rtl' }} fontSize={{ xl: '16px', sm: "14px", xs: '12px' }} fontFamily={'RD2'} position={'absolute'} top={'10%'} right={'3%'} color=' rgb(76, 97, 126)' > متخصصین مجرب </Typography>  </Box></Grid>
                            <Grid size={12}> <Box position={'relative'}> <Typography sx={{ direction: 'rtl' }} fontSize={{ xl: '16px', sm: "14px", xs: '12px' }} fontFamily={'RD2'} position={'absolute'} top={'10%'} right={'3%'} color=' rgb(76, 97, 126)' > محیط آرام و دلنشین </Typography>  </Box></Grid>
                            <Grid size={12}> <Box position={'relative'}> <Typography sx={{ direction: 'rtl' }} fontSize={{ xl: '16px', sm: "14px", xs: '12px' }} fontFamily={'RD2'} position={'absolute'} top={'10%'} right={'3%'} color=' rgb(76, 97, 126)' >برنامه‌های شخصی‌سازی شده
                            </Typography>  </Box></Grid>

                        </Grid>
                    </Stack>
                </CardContent>
                <CardActions sx={{ position: "relative" }}>
                    <Button size='medium' sx={{ position: 'absolute', right: '5%', fontFamily: "RD", }} >
                        دریافت نوبت
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ width: { xl: '391px', sm: "391px", xs: '320px' }, height: "356px", border: '0px solid ', borderRadius: "8px" }}>
                <CardMedia>
                    <Box position={'relative'} height={'60px'}> <Avatar sx={{ top: "15%", right: '4%', position: 'absolute' }} /></Box>
                </CardMedia>
                <CardContent>
                    <Stack gap={2} >
                        <Typography sx={{ direction: "rtl" }} variant='h3' fontFamily={'RD'} fontSize={{ xl: '17px', lg: '17px', md: '17px', sm: '15px', xs: '15px' }}>کاردرمانی کودکان</Typography>
                        <Typography variant='p' sx={{ direction: "rtl" }} fontSize={{ xl: '15px', lg: '15px', md: '15px', sm: '13px', xs: '13px' }} color=' rgb(76, 97, 126)' >خدمات تخصصی برای کودکان با تأخیر رشدی، اختلالات حسی-حرکتی، اوتیسم و مشکلات یادگیری</Typography>
                    </Stack>
                    <Stack>
                        <Grid container width={'100%'} height={'100px'} >
                            <Grid size={12}> <Box position={'relative'}> <Typography sx={{ direction: 'rtl' }} fontSize={{ xl: '16px', sm: "14px", xs: '12px' }} fontFamily={'RD2'} position={'absolute'} top={'10%'} right={'3%'} color=' rgb(76, 97, 126)' > تجهیزات پیشرفته </Typography>  </Box></Grid>
                            <Grid size={12}> <Box position={'relative'}> <Typography sx={{ direction: 'rtl' }} fontSize={{ xl: '16px', sm: "14px", xs: '12px' }} fontFamily={'RD2'} position={'absolute'} top={'10%'} right={'3%'} color=' rgb(76, 97, 126)' > متخصصین مجرب </Typography>  </Box></Grid>
                            <Grid size={12}> <Box position={'relative'}> <Typography sx={{ direction: 'rtl' }} fontSize={{ xl: '16px', sm: "14px", xs: '12px' }} fontFamily={'RD2'} position={'absolute'} top={'10%'} right={'3%'} color=' rgb(76, 97, 126)' > محیط آرام و دلنشین </Typography>  </Box></Grid>
                            <Grid size={12}> <Box position={'relative'}> <Typography sx={{ direction: 'rtl' }} fontSize={{ xl: '16px', sm: "14px", xs: '12px' }} fontFamily={'RD2'} position={'absolute'} top={'10%'} right={'3%'} color=' rgb(76, 97, 126)' >برنامه‌های شخصی‌سازی شده
                            </Typography>  </Box></Grid>

                        </Grid>
                    </Stack>
                </CardContent>
                <CardActions sx={{ position: "relative" }}>
                    <Button size='medium' sx={{ position: 'absolute', right: '5%', fontFamily: "RD", }} >
                        دریافت نوبت
                    </Button>
                </CardActions>
            </Card> */}

        </>
    )
}
