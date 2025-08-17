import { Box, Button, Card, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

import Swiper1 from '../Swiper/Index'
import CheckIcon from '@mui/icons-material/Check';
import { blue } from '@mui/material/colors';


export default function Serving() {
    return (
        <>

            <Box display={'flex'} p={1} flexDirection={"column"} width={'100%'} height={'115px'} pt={1} sx={{ justifyContent: 'center', justifyItems: 'center', textAlign: 'center', gap: "12px" }}>
                <Box> <Typography variant='h2' fontFamily={"RD"} fontSize={{ xl: '30px', lg: '30px', md: '27px', sm: '27px', xs: '22px' }} fontWeight={'800'} >خدمات ما
                </Typography></Box>
                <Box> <Typography width={'100%'} variant='p' sx={{ transform: 'translate(-50% ,-80% )' }} color=' rgb(76, 97, 126)' >کلینیک کاردرمانی آبان طیف وسیعی از خدمات تخصصی را برای کودکان، بزرگسالان و سالمندان ارائه می‌دهد</Typography></Box>
            </Box>
            <Box Box display={'flex'} justifyContent={'center'}>
                <Box display={'flex'} flexDirection={{ xl: 'row', lg: 'row', md: "column", sm: "column", xs: 'column' }} height={'auto'} paddingInline={'10px'} width={'100%'} p={1} position={'relative'} gap={'10px'}>

                    <Box display={'flex'} flexDirection={'row-reverse'} flex={'1'} gap={'10px'}>
                        <Card className='cardhover' sx={{
                            flex: '1',
                            boxShadow: "0 10px 15px -3px  rgb(0, 0, 0, 0.1)",
                            transition: ' all 0.5s ease', height: "420px", position: 'relative', display: "flex", flexDirection: "column", paddingInline: "12px", pt: '8px'
                        }} >
                            <Box flex={1}>
                                <Box width={'65px'} height={'65px'} borderRadius={'50%'} top={'8px'} bgcolor={'rgb(243 232 255)'} sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                                    <svg style={{ position: 'absolute', left: '61%', top: "50%", color: "rgb(37 99 235 )", transform: 'translate(-68%,-50%)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">

                                        <circle cx="32" cy="12" r="6" fill="rgb(147 51 234 )" />
                                        <line x1="32" y1="18" x2="32" y2="40" stroke="rgb(147 51 234 )" stroke-width="4" stroke-linecap="round" />
                                        <line x1="32" y1="22" x2="44" y2="34" stroke="rgb(147 51 234 )" stroke-width="3" stroke-linecap="round" />
                                        <line x1="32" y1="40" x2="24" y2="56" stroke="rgb(147 51 234 )" stroke-width="3" stroke-linecap="round" />
                                        <line x1="32" y1="40" x2="36" y2="56" stroke="rgb(147 51 234 )" stroke-width="3" stroke-linecap="round" />
                                        <line x1="44" y1="34" x2="44" y2="56" stroke="rgb(147 51 234 )" stroke-width="3" stroke-linecap="round" />
                                    </svg>

                                </Box>

                            </Box>
                            <Box flex={1}>
                                <Typography fontFamily={"RD2"} fontWeight={600} fontSize={'20px'} textAlign={'center'}>
                                    کاردرمانی سالمندان
                                </Typography>
                            </Box>
                            <Box flex={1} sx={{ direction: "ltr" }}>
                                <Typography color='rgb(75 85 99)' fontFamily={'RD2'} fontSize={"16px"}>
                                    خدمات ویژه برای سالمندان با هدف حفظ استقلال و بهبود کیفیت زندگی
                                </Typography>
                            </Box>
                            <Box flex={1} sx={{ direction: "ltr" }} display={'flex'} flexDirection={'column'} gap={'5px'}>
                                <Box display={'flex'} gap={'5px'} alignItems={'center'}>
                                    <CheckIcon fontSize={'15px'} sx={{ color: 'rgb(168 85 247  )' }} />
                                    <Typography fontSize={'14px'} fontFamily={"RD2"} color='rgb(75 85 99)'>تقویت تعادل و پیشگیری از سقوط


                                    </Typography>
                                </Box>
                                <Box display={'flex'} gap={'5px'} alignItems={'center'}>
                                    <CheckIcon fontSize={'15px'} sx={{ color: 'rgb(168 85 247 )' }} />
                                    <Typography fontSize={'14px'} fontFamily={"RD2"} color='rgb(75 85 99)'>مدیریت بیماری‌های مزمن

                                    </Typography>
                                </Box>
                                <Box display={'flex'} gap={'5px'} alignItems={'center'}>
                                    <CheckIcon fontSize={'15px'} sx={{ color: 'rgb(168 85 247 )' }} />
                                    <Typography fontSize={'14px'} fontFamily={"RD2"} color='rgb(75 85 99)'> تطابق محیط زندگی
                                    </Typography>
                                </Box>


                            </Box>
                            <Box flex={1} position={'relative'}>
                                <Button variant='contained' sx={{ position: "absolute", left: "50%", width: "90%", height: "48px", transform: "translateX(-50%)", fontFamily: "RD", bgcolor: "rgb(147 51 234 )" }}>درخواست نوبت</Button>

                            </Box>
                        </Card >
                        <Card className='cardhover' sx={{
                            flex: '1',
                            boxShadow: "0 10px 15px -3px  rgb(0, 0, 0, 0.1)",
                            transition: ' all 0.5s ease', height: "420px", position: 'relative', display: "flex", flexDirection: "column", paddingInline: "12px", pt: '8px'
                        }} >
                            <Box flex={1}>
                                <Box width={'65px'} height={'65px'} borderRadius={'50%'} top={'8px'} bgcolor={'rgb(255 237 213)'} sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                                    <svg style={{ height: '32px', width: '32px', position: 'absolute', left: '61%', top: "50%", color: "rgb(234 88 12  )", transform: 'translate(-68%,-50%)' }} xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                                    </svg>

                                </Box>

                            </Box>
                            <Box flex={1}>
                                <Typography fontFamily={"RD2"} fontWeight={600} fontSize={'20px'} textAlign={'center'}>
                                    گفتار درمانی
                                </Typography>
                            </Box>
                            <Box flex={1} sx={{ direction: "ltr" }}>
                                <Typography color='rgb(75 85 99)' fontFamily={'RD2'} fontSize={"16px"}>
                                    درمان اختلالات گفتار، زبان و بلع برای کودکان و بزرگسالان با روش‌های نوین و مؤثر
                                </Typography>
                            </Box>
                            <Box flex={1} sx={{ direction: "ltr" }} display={'flex'} flexDirection={'column'} gap={'5px'}>
                                <Box display={'flex'} gap={'5px'} alignItems={'center'}>
                                    <CheckIcon fontSize={'15px'} sx={{ color: 'rgb(249 115 22 )' }} />
                                    <Typography fontSize={'14px'} fontFamily={"RD2"} color='rgb(75 85 99)'>درمان تأخیر گفتاری


                                    </Typography>
                                </Box>
                                <Box display={'flex'} gap={'5px'} alignItems={'center'}>
                                    <CheckIcon fontSize={'15px'} sx={{ color: 'rgb(249 115 22 )' }} />
                                    <Typography fontSize={'14px'} fontFamily={"RD2"} color='rgb(75 85 99)'>اصلاح لکنت زبان

                                    </Typography>
                                </Box>
                                <Box display={'flex'} gap={'5px'} alignItems={'center'}>
                                    <CheckIcon fontSize={'15px'} sx={{ color: 'rgb(249 115 22 )' }} />
                                    <Typography fontSize={'14px'} fontFamily={"RD2"} color='rgb(75 85 99)'> درمان اختلالات بلع

                                    </Typography>
                                </Box>


                            </Box>
                            <Box flex={1} position={'relative'}>
                                <Button variant='contained' sx={{ position: "absolute", left: "50%", width: "90%", height: "48px", transform: "translateX(-50%)", fontFamily: "RD", bgcolor: "rgb(234 88 12)" }}>درخواست نوبت</Button>

                            </Box>
                        </Card >

                    </Box>

                    <Box display={'flex'} flexDirection={'row'} flex={'1'} gap={'10px'}>
                        <Card className='cardhover' sx={{
                            flex: '1',
                            boxShadow: "0 10px 15px -3px  rgb(0, 0, 0, 0.1)",
                            transition: ' all 0.5s ease', height: "420px", position: 'relative', display: "flex", flexDirection: "column", paddingInline: "12px", pt: '8px'
                        }} >
                            <Box flex={1}>
                                <Box width={'65px'} height={'65px'} borderRadius={'50%'} top={'8px'} bgcolor={'rgb(220 252 231)'} sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                                    <svg style={{ height: '32px', width: '32px', position: 'absolute', left: '61%', top: "50%", color: "rgb(22 163 74 )", transform: 'translate(-68%,-50%)' }} xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                </Box>

                            </Box>
                            <Box flex={1}>
                                <Typography fontFamily={"RD2"} fontWeight={600} fontSize={'20px'} textAlign={'center'}>
                                    کاردرمانی بزرگسالان
                                </Typography>
                            </Box>
                            <Box flex={1} sx={{ direction: "ltr" }}>
                                <Typography color='rgb(75 85 99)' fontFamily={'RD2'} fontSize={"16px"}>
                                    توانبخشی و درمان بزرگسالان با آسیب‌های مغزی، سکته و مشکلات عصبی
                                </Typography>
                            </Box>
                            <Box flex={1} sx={{ direction: "ltr" }} display={'flex'} flexDirection={'column'} gap={'5px'}>
                                <Box display={'flex'} gap={'5px'} alignItems={'center'}>
                                    <CheckIcon fontSize={'15px'} sx={{ color: 'rgb(22 163 74 )' }} />
                                    <Typography fontSize={'14px'} fontFamily={"RD2"} color='rgb(75 85 99)'>توانبخشی پس از سکته

                                    </Typography>
                                </Box>
                                <Box display={'flex'} gap={'5px'} alignItems={'center'}>
                                    <CheckIcon fontSize={'15px'} sx={{ color: 'rgb(22 163 74 )' }} />
                                    <Typography fontSize={'14px'} fontFamily={"RD2"} color='rgb(75 85 99)'>بازیابی مهارت‌های روزمره

                                    </Typography>
                                </Box>
                                <Box display={'flex'} gap={'5px'} alignItems={'center'}>
                                    <CheckIcon fontSize={'15px'} sx={{ color: 'rgb(22 163 74 )' }} />
                                    <Typography fontSize={'14px'} fontFamily={"RD2"} color='rgb(75 85 99)'> درمان آسیب‌های دست
                                    </Typography>
                                </Box>


                            </Box>
                            <Box flex={1} position={'relative'}>
                                <Button variant='contained' sx={{ position: "absolute", left: "50%", width: "90%", height: "48px", transform: "translateX(-50%)", fontFamily: "RD", bgcolor: "rgb(22 163 74 )" }}>درخواست نوبت</Button>

                            </Box>
                        </Card >
                        <Card className='cardhover' sx={{
                            flex: '1',
                            boxShadow: "0 10px 15px -3px  rgb(0, 0, 0, 0.1)",
                            transition: ' all 0.5s ease', height: "420px", position: 'relative', display: "flex", flexDirection: "column", paddingInline: "12px", pt: '8px'
                        }} >
                            <Box flex={1}>
                                <Box width={'65px'} height={'65px'} borderRadius={'50%'} top={'8px'} bgcolor={'rgb(219 234 254)'} sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                                    <svg style={{ height: '32px', width: '32px', position: 'absolute', left: '61%', top: "50%", color: "rgb(37 99 235 )", transform: 'translate(-68%,-50%)' }} xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m0 6V4m0 6h6m-7 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </Box>
                            </Box>
                            <Box flex={1}>
                                <Typography fontFamily={"RD2"} fontWeight={600} fontSize={'18px'} textAlign={'center'}>
                                    کاردرمانی کودکان
                                </Typography>

                            </Box>
                            <Box flex={1} sx={{ direction: "ltr" }} display={'flex'} flexDirection={'column'} gap={'5px'}>
                                <Typography color='rgb(75 85 99)' fontFamily={'RD2'} fontSize={"16px"}>
                                    درمان تخصصی کودکان با مشکلات حسی، حرکتی و رشدی با استفاده از روش‌های مدرن
                                </Typography>
                            </Box>
                            <Box flex={1} sx={{ direction: "ltr" }} >
                                <Box display={'flex'} gap={'5px'} alignItems={'center'}>
                                    <CheckIcon fontSize={'15px'} sx={{ color: 'rgb(59 130 246)' }} />
                                    <Typography fontSize={'14px'} fontFamily={"RD2"} color='rgb(75 85 99)'>درمان اختلالات حسی
                                    </Typography>
                                </Box>
                                <Box display={'flex'} gap={'5px'} alignItems={'center'}>
                                    <CheckIcon fontSize={'15px'} sx={{ color: 'rgb(59 130 246)' }} />
                                    <Typography fontSize={'14px'} fontFamily={"RD2"} color='rgb(75 85 99)'>تقویت مهارت‌های حرکتی
                                    </Typography>
                                </Box>
                                <Box display={'flex'} gap={'5px'} alignItems={'center'}>
                                    <CheckIcon fontSize={'15px'} sx={{ color: 'rgb(59 130 246)' }} />
                                    <Typography fontSize={'14px'} fontFamily={"RD2"} color='rgb(75 85 99)'>بهبود مهارت‌های اجتماعی

                                    </Typography>
                                </Box>


                            </Box>
                            <Box flex={1} position={'relative'}>
                                <Button variant='contained' sx={{ position: "absolute", left: "50%", width: "90%", height: "48px", transform: "translateX(-50%)", fontFamily: "RD", bgcolor: "rgb(37 99 235)" }}>درخواست نوبت</Button>

                            </Box>
                        </Card >
                    </Box>
                </Box >
            </Box>


        </>
    )
}
