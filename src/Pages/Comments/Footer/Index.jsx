import { Box, IconButton, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Footer() {
    return (
        <>


            <Box width={'100%'} height={'auto'} mt={2} bgcolor={'rgb(31 41 55 )'} display={'flex'} flexDirection={{ xl: 'row-reverse', lg: 'row-reverse', md: 'row-reverse', sm: 'column', xs: 'column' }} p={3} gap={4} >
                <Box height={'100px'} flex={1} sx={{ direction: "ltr" }} display={"flex"} flexDirection={'column'} gap={1}>
                    <Box display={'flex'} flexDirection={'row'} gap={1} alignItems={'center'}  >
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "32px", height: "32px", color: "rgb(96 165 250)" }} class="h-8 w-8 text-blue-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.32.84-4.5 2.14C10.82 3.84 9.26 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7Z"></path>
                        </svg>
                        <Typography color='white' variant='h3' fontSize={'20px'} fontFamily={"RD2"} fontWeight={"700"} >کلینیک کاردرمانی آبان</Typography>

                    </Box>
                    <Typography color='rgb(209 213 219 )' variant='h3' fontSize={'16px'} fontFamily={"RD2"}>ارائه بهترین خدمات کاردرمانی با بیش از 8  سال تجربه

                    </Typography>
                </Box>
                <Box height={'200px'} flex={1} sx={{ direction: "ltr" }}>
                    <List >

                        <ListItem sx={{ color: 'white', variant: 'h3', fontSize: '20px', fontFamily: "RD2", fontWeight: "700" }}>خدمات</ListItem>
                        <ListItem sx={{ color: 'rgb(209 213 219)', variant: 'h3', fontSize: '16px', fontFamily: "RD2" }} >کاردرمانی کودکان</ListItem>
                        <ListItem sx={{ color: 'rgb(209 213 219)', variant: 'h3', fontSize: '16px', fontFamily: "RD2" }} >کاردرمانی بزرگسالان و سالمندان</ListItem>
                        <ListItem sx={{ color: 'rgb(209 213 219)', variant: 'h3', fontSize: '16px', fontFamily: "RD2" }} >گفتار درمانی کودکان و بزرگسالان </ListItem>
                        <ListItem sx={{ color: 'rgb(209 213 219)', variant: 'h3', fontSize: '16px', fontFamily: "RD2" }} >مشاوره جهت درمان</ListItem>
                    </List>

                </Box>

                <Box height={'200px'} flex={1} sx={{ direction: "ltr" }}>
                    <List >

                        <ListItem sx={{ color: 'white', variant: 'h3', fontSize: '20px', fontFamily: "RD2", fontWeight: "700" }}>تماس با ما </ListItem>
                        <ListItem sx={{ color: 'rgb(209 213 219)', variant: 'h3', fontSize: '16px', fontFamily: "RD2" }} >تلفن :09150087134</ListItem>
                        <ListItem sx={{ color: 'rgb(209 213 219)', variant: 'h3', fontSize: '16px', fontFamily: "RD2" }} >آدرس: اراک خیابان دکتر حسابی کوچه مریدی جنب آکواریوم میلاد کلینیک کاردرمانی آبان</ListItem>
                        <ListItem>
                            <Box display={'flex'} alignItems={'center'} gap={1}>
                                <a href="https://www.instagram.com/clinic.aban.arak?igsh=MTE4MHhidWd0MnU1Mw==" style={{ color: ' inherit', paddingTop: "4px" }} target='_blank'>
                                    <svg style={{ color: "rgba(89, 89, 89 ,1  )" }} viewBox="0 0 24 24" width="24" height="24" aria-label="Instagram" role="img">
                                        <rect x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                                        <circle cx="12" cy="12" r="5" fill="white" />
                                        <circle cx="12" cy="12" r="3" fill="currentColor" />
                                        <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/clinic.aban.arak?igsh=MTE4MHhidWd0MnU1Mw==" target='_blank'>   <Typography color='rgb(209 213 219)' fontFamily={"RD2"} variant='h3' fontSize={'16px'}>
                                    صفحه ما در اینستاگرام
                                </Typography>
                                </a>
                            </Box>
                        </ListItem>
                    </List>

                </Box>

            </Box>


        </>
    )
}
