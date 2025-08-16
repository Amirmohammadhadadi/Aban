import { TextFields } from '@mui/icons-material'
import { Box, Button, Grid, MenuItem, TextareaAutosize, TextField, Typography } from '@mui/material'
import React, { use, useState } from 'react'

export default function Time() {
    const [value, setValue] = useState("")
    const options = [
        { value: "talk", label: "مشاوره اولیه" },
        { value: "kar", label: "کاردرمانی" },
        { value: "goftar", label: "گفتار درمانی" },
    ];

    const [name, setName] = useState("")
    const [phone, setphone] = useState("")
    const [time, setTime] = useState('false')
    const handephone = (text) => {
        setInp(text)
    }

    const handelName = (text) => {
        setName(text)
    }

    let fullText;
    if (!phone && !name && !value) {
        fullText = true
    } else {
        fullText = false
    }

    return (
        <>
            <Box width={'100%'} height={'auto'} display={'flex'} flexDirection={'column'}  >
                <Box display={'flex'} p={1} flexDirection={"column"} width={'100%'} height={'115px'} pt={1} sx={{ justifyContent: 'center', justifyItems: 'center', textAlign: 'center', gap: "12px" }}>
                    <Box> <Typography variant='h2' fontFamily={"RD"} fontSize={{ xl: '30px', lg: '30px', md: '27px', sm: '27px', xs: '22px' }} fontWeight={'800'} >اطلاعات تماس
                    </Typography></Box>
                    <Box> <Typography width={'100%'} variant='p' sx={{ transform: 'translate(-50% ,-80% )' }} color=' rgb(76, 97, 126)' >جهت دریافت نوبت با ما در تماس باشید </Typography></Box>
                </Box>
                <Box flex={1} display={'flex'} alignItems={'center'} flexDirection={{ xl: 'row', lg: 'row', md: 'row', sm: 'column-reverse', xs: 'column-reverse' }}>
                    < Box width={{ xl: '37%', lg: '37%', md: '37%', sm: '80%', xs: '80%' }} height={'auto'} bgcolor={'rgb(245 247 249) '} borderRadius={3} marginRight={2} display={'flex'} flexDirection={"column"} p={3} gap={4} >
                        <Typography variant='h4' fontFamily={"RD2"} fontSize={'24px'} fontWeight={700} textAlign={'center'}>
                            درخواست نوبت
                        </Typography>
                        <Box display={'flex'} flexDirection={'column'} gap={3} padding={4} alignItems={'center'} >
                            <TextField onChange={() => handelName(e.target.value)} label='نام و نام خانوادگی' sx={{ width: { xl: '80%', lg: '80%', md: '80%', sm: '80%', xs: '80%' }, fontFamily: "RD2", direction: "ltr" }} />
                            <TextField onChange={() => handephone(e.target.value)} label='شماره تماس' type='number' sx={{ width: { xl: '80%', lg: '80%', md: '80%', sm: '80%', xs: '80%' }, fontFamily: "RD2", direction: "ltr" }} />
                            <TextField
                                sx={{ width: { xl: '80%', lg: '80%', md: '80%', sm: '80%', xs: '80%' }, fontFamily: "RD2", direction: "ltr" }}
                                select
                                label='نوع خدمات'
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                fullWidth
                            >
                                {options.map((option) => (
                                    <MenuItem sx={{ direction: "ltr" }} key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField multiline placeholder='توضیحات بیشتر' sx={{ width: { xl: '80%', lg: '80%', md: '80%', sm: '80%', xs: '80%' }, fontFamily: "RD2", direction: "ltr" }} />
                            <Button variant='contained' disabled={fullText} sx={{ width: "50%" }} dis >ارسال درخواست</Button>
                        </Box>

                    </Box>

                    <Box width={{ xl: '50%', lg: '50%', md: '60%', sm: '100%', xs: '100%' }} height={'auto'} display={'flex'} p={2} flexDirection={"column"} gap={3}>
                        <Typography variant='h3' sx={{ direction: "ltr" }} fontSize={'36px'} fontWeight={'700'} fontFamily={'RD2'}>
                            ارتباط با ما
                        </Typography>
                        <Box sx={{ direction: "rtl" }} display={'flex'} flexDirection={"row"} gap={1} justifyItems={"center"} justifyContent={'left'}>
                            <Box display={'flex'} flexDirection={'column'} sx={{ direction: "ltr" }} >
                                <Typography variant='h4' fontSize={'16px'} fontFamily={"RD2"} fontWeight={700} >آدرس</Typography>
                                <Typography color='rgb(75 85 99)' fontSize={{ xl: '15px', lg: '15px', md: '14px', sm: '14px', xs: '12px' }} fontFamily={"RD2"} > اراک خیابان دکتر حسابی کوچه مریدی جنب آکواریوم میلاد مرکز کاردرمانی و گفتار رمانی آبان</Typography>
                            </Box>
                            <Box width={'48px'} height={'48px'} borderRadius={'50%'} position={'relative'} bgcolor={'rgb(219 234 254)'} >
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "24px", height: "24px", position: "absolute", left: "50%", top: "50%", color: "rgb(37 99 235 )", transform: "translate(-50%,-50%)" }} class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </Box>

                        </Box>
                        <Box sx={{ direction: "rtl" }} display={'flex'} flexDirection={"row"} gap={1} justifyItems={"center"} justifyContent={'left'}>
                            <Box display={'flex'} flexDirection={'column'} sx={{ direction: "ltr" }} >
                                <Typography variant='h4' fontSize={'16px'} fontFamily={"RD2"} fontWeight={700} >تلفن</Typography>
                                <Typography color='rgb(75 85 99)' fontSize={'15px'} fontFamily={"RD2"} >09150087134</Typography>
                            </Box>
                            <Box width={'48px'} height={'48px'} borderRadius={'50%'} position={'relative'} bgcolor={'rgb(220 252 231 )'} >
                                <svg style={{ width: "24px", height: "24px", position: "absolute", left: "50%", top: "50%", color: "rgb(22 163 74)", transform: "translate(-50%,-50%)" }} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </Box>

                        </Box>

                        <Box sx={{ direction: "rtl" }} display={'flex'} flexDirection={"row"} gap={1} justifyItems={"center"} justifyContent={'left'}>
                            <Box display={'flex'} flexDirection={'column'} sx={{ direction: "ltr" }} >
                                <Typography variant='h4' fontSize={'16px'} fontFamily={"RD2"} fontWeight={700} >اینستاگرام</Typography>
                                <Typography color='rgb(75 85 99)' fontSize={'15px'} fontFamily={"RD2"} ><a target='_blank' style={{ color: ' inherit' }} href="https://www.instagram.com/clinic.aban.arak?igsh=MTE4MHhidWd0MnU1Mw==">clinic.aban.arak</a> </Typography>
                            </Box>
                            <Box width={'48px'} height={'48px'} borderRadius={'50%'} position={'relative'} bgcolor={'rgb(243 232 255)'} >
                                <a href="https://www.instagram.com/clinic.aban.arak?igsh=MTE4MHhidWd0MnU1Mw==" style={{ color: ' inherit' }} target='_blank'>
                                    <svg style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", color: "rgb(147 51 234  )" }} viewBox="0 0 24 24" width="24" height="24" aria-label="Instagram" role="img">
                                        <rect x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                                        <circle cx="12" cy="12" r="5" fill="white" />
                                        <circle cx="12" cy="12" r="3" fill="currentColor" />
                                        <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                                    </svg>
                                </a>
                            </Box>

                        </Box>
                        <Box sx={{ direction: "rtl" }} display={'flex'} flexDirection={"row"} gap={1} justifyItems={"center"} justifyContent={'left'}>
                            <Box display={'flex'} flexDirection={'column'} sx={{ direction: "ltr" }} >
                                <Typography variant='h4' fontSize={'16px'} fontFamily={"RD2"} fontWeight={700} >ساعات کاری
                                </Typography>
                                <Typography color='rgb(75 85 99)' fontSize={'15px'} fontFamily={"RD2"} >
                                    شنبه تا پنج‌شنبه: ۸ تا ۲۰
                                </Typography>
                            </Box>
                            <Box width={'48px'} height={'48px'} borderRadius={'50%'} position={'relative'} bgcolor={'rgb(255 237 213)'} >
                                <svg style={{ width: "24px", height: "24px", position: "absolute", left: "50%", top: "50%", color: "rgb(234 88 12)", transform: "translate(-50%,-50%)" }} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </Box>

                        </Box>


                    </Box>


                </Box>
            </Box >
        </>
    )
}
