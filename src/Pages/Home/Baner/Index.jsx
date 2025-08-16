import { Box, Button, Fab, Grid, IconButton, Stack, Typography, useMediaQuery } from '@mui/material'
import { blue, red } from '@mui/material/colors'
import React from 'react'
import { createTheme } from '@mui/material/styles';
import logo from '../../../assets/Imge/logo.jpg'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Image } from '@mui/icons-material';

import '../Baner/Style/BanerStyle.css'
import Nav from '../Nav/Index';
import NavMobile from '../Navmobile/Index';


export default function Baner() {

    const smallScreen = useMediaQuery('(max-width:960px)')

    return (
        <>

            {smallScreen ? <NavMobile /> : <Nav />}
            <Box width={'100%'} display={'flex'} sx={{ height: '75vh', background: ' linear-gradient(135deg, #667eea 0%, #764ba2 100%)', justifyContent: "center", justifyItems: 'center', flexDirection: { xl: 'row', lg: 'row', md: 'row', sm: 'column-reverse', xs: 'column-reverse' } }}  >
                <Box position={'relative'} flex={1} display={'flex'} flexDirection={'column'} sx={{ justifyItems: "center", justifyContent: 'center' }}>
                    <Box className="animation" left={'50%'} position={'absolute'} sx={{ transform: "translateX(-50%)" }} width={'50%'} height={'50%'} display={'flex'} justifyItems={"center"} justifyContent={'center'} pt={1}>
                        <svg style={{ color: 'RGBA(0, 0 ,0, 0.14)', width: '100%', height: "100%" }} xmlns="http://www.w3.org/2000/svg" class="h-80 w-80 text-white opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.32.84-4.5 2.14C10.82 3.84 9.26 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7Z"></path>
                        </svg>
                    </Box>
                </Box>
                <Box flex={1} display={'flex'} flexDirection={'column'} sx={{ justifyItems: "center", justifyContent: 'center' }}>
                    <Box width={'100%'} height={"50%"} display={'flex'} flexDirection={"column"} pl={'16px'} pt={2} gap={3} >
                        <Typography className="animation2" variant='h2' sx={{ direction: 'ltr' }} fontSize={{ xl: '48px', lg: '48px', md: '40px', sm: '26px', xs: '26px' }} fontFamily={'RD'} fontWeight={"900"} color='white'>کلینیک تخصصی <Typography variant='h2' fontSize={{ xl: '48px', lg: '48px', md: '40px', sm: '26px', xs: '26px' }} fontFamily={'RD'} fontWeight={"900"} color='rgb(253 224 71)' display={'inline'} >کاردرمانی</Typography> آبان</Typography>
                        <Typography variant='p' sx={{ direction: 'ltr' }} color='white' fontSize={{ xl: "22px", sm: '18px', xs: '16px' }}>با بیش از ۱۰ سال تجربه در ارائه خدمات کاردرمانی با بالاترین کیفیت در شهر اراک</Typography>
                        <Box sx={{ direction: 'ltr' }} display={'flex'} gap={2}>
                            <Button variant='contained' sx={{ width: '150px', height: '49px', backgroundColor: 'white', color: "rgb(37 99 235)", fontFamily: "RD2", fontSize: "16px" }} >نوبت دهی آنلاین </Button>
                            <Button variant='outlined' sx={{
                                transition: ' all 0.5s ease',
                                borderColor: "white", color: 'white', width: '150px', height: '49px', fontSize: "20px", backgroundColor: 'none', "&:hover": { backgroundColor: "white", color: "rgb(37 99 235)" }
                            }}> مشاهده خدمات</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>


        </>
    )
}
