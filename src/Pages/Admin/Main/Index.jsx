import { Box, CssBaseline, Typography } from '@mui/material'
import React from 'react'

export default function Main() {
    return (
        <>
            <CssBaseline />
            <Box width={'100%'} bgcolor={'white'} height={'65px'} display={'flex'} flexDirection={'row-reverse'} p={2} boxShadow={' 0 0px 5px  -0.5px'}>
                <Typography variant='h2' fontSize={'20px'} fontWeight={600} fontFamily={'RD'} color='rgb(0 60 192)' >
                    پنل مدیریت کلینیک آبان
                </Typography>
            </Box>



        </>
    )
}
