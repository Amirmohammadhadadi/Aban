import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Info() {
    return (
        <>
            <Box width={'100%'} height={{ xl: '30vh', lg: '30vh', md: '30vh', sm: '50vh', xs: '50vh' }}
                p={1}
            >
                <Box width={"100%"} height={'100%'} display={'flex'} justifyContent={{ xl: 'space-around', lg: 'space-around', md: 'space-around' }} alignItems={'center'} flexDirection={{ xl: 'row-reverse', lg: 'row-reverse', md: 'row-reverse', sm: 'column', xs: 'column' }}>
                    <Box display={'flex'} flexDirection={"column"} gap={'2px'} justifyItems={'center'}>
                        <Typography sx={{ color: '#764ba2 ', fontSize: '2.5rem', fontWeight: "800" }}>+500</Typography>
                        <Typography fontFamily={'RD2'} fontSize={"18px"} color='rgb(75 85 99)'>بیمار درمان شده</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={"column"} gap={'2px'} justifyItems={'center'}>
                        <Typography fontFamily={'RD'} sx={{ color: '#764ba2 ', fontSize: '2.5rem', fontWeight: "800" }}>+10</Typography>
                        <Typography fontFamily={'RD2'} fontSize={"18px"} color='rgb(75 85 99)'>سال تجربه

                        </Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={"column"} gap={'2px'} justifyItems={'center'}>
                        <Typography fontFamily={'RD'} sx={{ color: '#764ba2 ', fontSize: '2.5rem', fontWeight: "800" }}>+98%
                        </Typography>
                        <Typography fontFamily={'RD2'} fontSize={"18px"} color='rgb(75 85 99)'>رضایت بیماران

                        </Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={"column"} gap={'2px'} justifyItems={'center'}>
                        <Typography fontFamily={'RD'} sx={{ color: '#764ba2 ', fontSize: '2.5rem', fontWeight: "800" }}>24/7
                        </Typography>
                        <Typography fontFamily={'RD2'} fontSize={"18px"} color='rgb(75 85 99)'>پشتیبانی

                        </Typography>
                    </Box>
                </Box>


            </Box>

        </>
    )
}
