import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CartComponent() {
    return (
        <>
            <Box width={"100%"} height={"auto"} position={'relative'} >

                <Box width={'100%'} height={'80%'} >
                    <Box sx={{ direction: "ltr" }} p={3}>
                        <Typography fontSize={'20px'} variant='h4' fontFamily={"RD2"}>داشبورد</Typography>
                        <Typography fontFamily={"RD2"} color='rgb(75 85 99)'  >خلاصه وضعیت کلینیک</Typography>
                    </Box>
                    {/* بخش کارت ها */}

                    <Box height={'100%'} display={'flex'} flexDirection={{ xl: 'row-reverse', lg: 'row-reverse', md: 'row-reverse', sm: 'column', xs: 'column' }} justifyContent={'center'} justifyItems={'center'} alignItems={'center'} gap={'10px'} p={{ xl: '45px', lg: '40px', md: '30px', sm: '20px', xs: '20px' }} >


                        <Box width={'400px'} height={'120px'} boxShadow={'0 2px 4px -2px  '} gap={2} borderRadius={5} display={'flex'} alignItems={'center'} justifyContent={'left'} p={2}>

                            <Box flex={1} display={'flex'} flexDirection={'column'} justifyItems={'center'} justifyContent={'left'} >
                                <Typography fontFamily={"RD2"} sx={{ direction: 'ltr' }}>5</Typography>
                                <Typography fontFamily={"RD2"} sx={{ direction: 'ltr' }}>درخواست نوبت های جدید </Typography>
                            </Box>


                            <Box width={'20%'} >
                                <Box width={"48px"} height={"48px"} bgcolor={'rgb(219 234 254)'} borderRadius={'12px'} display={'flex'} justifyContent={'center'}  >
                                    <svg style={{ width: "25px", height: "40px", color: "rgb(37 99 235 )" }}
                                        xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                </Box>
                            </Box>




                        </Box>

                        <Box width={'400px'} height={'120px'} boxShadow={'0 2px 4px -2px  '} gap={2} borderRadius={5} display={'flex'} alignItems={'center'} justifyContent={'left'} p={2}>

                            <Box flex={1} display={'flex'} flexDirection={'column'} justifyItems={'center'} justifyContent={'left'} >
                                <Typography fontFamily={"RD2"} sx={{ direction: 'ltr' }}>5</Typography>
                                <Typography fontFamily={"RD2"} sx={{ direction: 'ltr' }}>کامت های جدید </Typography>
                            </Box>


                            <Box width={'20%'} >
                                <Box width={"48px"} height={"48px"} bgcolor={'rgb(254 249 195)'} borderRadius={'12px'} display={'flex'} justifyContent={'center'}  >
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "25px", height: "40px", color: "rgb(202 138 4 )" }} class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                    </svg>

                                </Box>
                            </Box>




                        </Box>
                        <Box width={'400px'} height={'120px'} boxShadow={'0 2px 4px -2px  '} gap={2} borderRadius={5} display={'flex'} alignItems={'center'} justifyContent={'left'} p={2}>

                            <Box flex={1} display={'flex'} flexDirection={'column'} justifyItems={'center'} justifyContent={'left'} >
                                <Typography fontFamily={"RD2"} sx={{ direction: 'ltr' }}>5</Typography>
                                <Typography fontFamily={"RD2"} sx={{ direction: 'ltr' }}>رضایت بیماران</Typography>
                            </Box>


                            <Box width={'20%'} >
                                <Box width={"48px"} height={"48px"} bgcolor={'rgb(243 232 255)'} borderRadius={'12px'} display={'flex'} justifyContent={'center'}  >
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "25px", height: "40px", color: "rgb(147 51 234 )" }} class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                    </svg>


                                </Box>
                            </Box>




                        </Box>

                    </Box>


                </Box>




            </Box >


        </>
    )
}
