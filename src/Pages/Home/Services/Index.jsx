import { Grade } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';

export default function Services() {


    return (
        <>

            <Box display={'flex'} flexDirection={'column'} height={'auto'} width={'100%'} p={2} position={'relative'} >
                <Box position={'relative'} display={'flex'} flexDirection={"column"} width={'100%'} height={'100px'} pt={2} ><Typography variant='h2' fontFamily={"RD"} fontSize={{ xl: '30px', lg: '30px', md: '27px', sm: '27px', xs: '22px' }} fontWeight={'800'} position={'absolute'} left={'50%'} sx={{ transform: 'translateX(-50% )' }} >درباره کلینیک آبان</Typography>
                    <Box height={'4px'} width={'120px'} bgcolor={'blue'} position={'absolute'} left={'50%'} top={'70%'} sx={{ transform: 'translate(-50%,-70% )' }} ></Box>
                </Box>
                <Box display={'flex'} flexDirection={{ xl: 'row-reverse', lg: 'row-reverse', md: 'row-reverse', sm: 'column', xs: 'column' }} gap={'16px'} height={'60%'} width={'100%'} p={1} position={'relative'}>

                    <Box flex={1} bgcolor={'bisque'}>

                    </Box>
                    <Box flex={1} display={'flex'} pt={2} flexDirection={"column"} gap={3} sx={{ direction: 'ltr' }}>
                        <Typography variant='h3' fontFamily={'RD'} fontSize={{ xl: '28px', lg: '28px', md: '24px', sm: '24px', xs: '22px' }} color=' rgb(37 99 235)'>بهترین مرکز کاردرمانی در اراک</Typography>
                        <Typography variant='p' fontSize={{ xl: '17px', lg: '17px', md: '17px', sm: '15px', xs: '15px' }} color=' rgb(76, 97, 126)' >کلینیک کاردرمانی آبان با هدف ارائه خدمات تخصصی کاردرمانی با بالاترین کیفیت در شهر اراک تأسیس شده است. تیم متخصص ما متشکل از کاردرمانگران مجرب و با سابقه است که با استفاده از جدیدترین روش‌ها و تجهیزات روز دنیا، خدمات درمانی را به مراجعین ارائه می‌دهند.</Typography>
                        <Typography variant='p' fontSize={{ xl: '17px', lg: '17px', md: '17px', sm: '15px', xs: '15px' }} color=' rgb(76, 97, 126)'>ما در کلینیک آبان معتقدیم که هر فرد منحصر به فرد است و نیازهای درمانی خاص خود را دارد. به همین دلیل، برنامه‌های درمانی ما کاملاً شخصی‌سازی شده و متناسب با نیازهای هر بیمار طراحی می‌شود.</Typography>
                        <Grid container width={'100%'} flex={1}>
                            <Grid size={6} display={"flex"} justifyItems={'center'} gap={'10px'} ><CheckIcon sx={{ color: "rgb(37 99 235)", fontSize: { xl: '20px', sm: "18px", xs: '17px' } }} /> <Typography fontSize={{ xl: '16px', sm: "16px", xs: '14px' }} fontFamily={'RD2'}>تجهیزات پیشرفته </Typography></Grid>
                            <Grid size={6} display={"flex"} justifyItems={'center'} gap={'10px'} ><CheckIcon sx={{ color: "rgb(37 99 235)", fontSize: { xl: '20px', sm: "18px", xs: '17px' } }} /> <Typography fontSize={{ xl: '16px', sm: "16px", xs: '14px' }} fontFamily={'RD2'}>متخصصین مجرب</Typography></Grid>
                            <Grid size={6} display={"flex"} justifyItems={'center'} gap={'10px'} ><CheckIcon sx={{ color: "rgb(37 99 235)", fontSize: { xl: '20px', sm: "18px", xs: '17px' } }} /> <Typography fontSize={{ xl: '16px', sm: "16px", xs: '14px' }} fontFamily={'RD2'}>محیط آرام و دلنشین</Typography></Grid>
                            <Grid size={6} display={"flex"} justifyItems={'center'} gap={'10px'} ><CheckIcon sx={{ color: "rgb(37 99 235)", fontSize: { xl: '20px', sm: "18px", xs: '17px' } }} /> <Typography fontSize={{ xl: '16px', sm: "16px", xs: '14px' }} fontFamily={'RD2'}>برنامه‌های شخصی‌سازی شده</Typography></Grid>


                        </Grid>
                    </Box>

                </Box>


            </Box>



        </>
    )
}
