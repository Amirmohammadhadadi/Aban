import { Box, Button, CssBaseline, List, ListItemButton, Typography } from '@mui/material'
import React from 'react'

export default function Nav() {

    return (
        <>
            <CssBaseline />
            <Box zIndex={1000} bgcolor={"white"} boxShadow={'0 0px 4px -1px'} position={'fixed'} display={'flex'} flexDirection={"row-reverse"} justifyContent={'space-between'} justifyItems={'center'} width={'100%'} height={'64px'} border={'solid 1px #e5e7eb'} padding={'0px 16px'}>
                <Typography variant='h1' fontWeight={'800'} color=' rgb(37 99 235)' fontFamily={'RD2'} fontSize={{ xl: '24px', lg: '20px', md: '16px' }} sx={{ direction: 'rtl', lineHeight: '200%', display: 'inline-block' }}  >کلینیک کاردرمانی آبان  </Typography>
                <Box>
                    <List sx={{ display: 'flex', flexDirection: 'row-reverse', gap: '20px' }}>
                        <ListItemButton sx={{ fontFamily: 'RD2' }}>خانه</ListItemButton>
                        <ListItemButton sx={{ fontFamily: 'RD2' }}>درباره ما </ListItemButton>
                        <ListItemButton sx={{ fontFamily: 'RD2' }}>خدمات ما </ListItemButton>
                        <ListItemButton sx={{ fontFamily: 'RD2' }}>تیم ما</ListItemButton>
                        <ListItemButton sx={{ fontFamily: 'RD2' }}>نظرات بیماران </ListItemButton>
                        <ListItemButton sx={{ fontFamily: 'RD2' }}>تماس با ما</ListItemButton>
                    </List>

                </Box>
                <Button variant='contained' size='160px' sx={{ fontFamily: 'RD2', fontSize: '18px' }}>
                    نوبت دهی آنلاین
                </Button>
            </Box>





        </>
    )
}
