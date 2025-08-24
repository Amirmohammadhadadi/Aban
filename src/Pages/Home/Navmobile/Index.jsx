import { Box, Button, Drawer, IconButton, List, ListItemButton, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Login from '../Login/Index';
import { Link } from 'react-router-dom';
import authContext from '../../../Utils/AuthContext';
import Home from '../Index';
import AdminPage from '../../Admin/Index';
export default function NavMobile() {
    const [open, setOpen] = useState(false)
    const handelToggle = (newItem) => {
        setOpen(newItem)
    }
    const { token, handleToken } = useContext(authContext)

    return (
        <>
            <Box zIndex={1000} bgcolor={"white"} position={'fixed'} display={'flex'} flexDirection={"row-reverse"} justifyContent={'space-between'} justifyItems={'center'} width={'100%'} height={'30px'} border={'solid 1px #e5e7eb'} padding={'0px 16px'}>
                <Typography variant='h1' color=' rgb(37 99 235)' fontSize={{ xl: '32px', lg: '32px', md: '20px', sm: '24px', xs: '18px' }} >کلینیک کاردرمانی آبان <FavoriteBorderIcon fontSize='16px' /> </Typography>


                <Button onClick={() => handelToggle(true)}><DensityMediumIcon /></Button>
                <Drawer anchor='left' open={open} onClose={() => handelToggle(false)} >
                    <List sx={{ width: '150px', direction: 'rtl' }} >
                        <ListItemButton sx={{ fontFamily: 'RD2' }}>خانه</ListItemButton>
                        <ListItemButton sx={{ fontFamily: 'RD2' }}>درباره ما </ListItemButton>
                        <ListItemButton sx={{ fontFamily: 'RD2' }}>خدمات ما </ListItemButton>
                        <ListItemButton sx={{ fontFamily: 'RD2' }}>تیم ما</ListItemButton>
                        <ListItemButton sx={{ fontFamily: 'RD2' }}>نظرات بیماران </ListItemButton>
                        <ListItemButton sx={{ fontFamily: 'RD2' }}>تماس با ما</ListItemButton>
                        <Link to={token ? 'adminpage' : '/login'}><ListItemButton sx={{ fontFamily: 'RD2' }}>ورود ادمین</ListItemButton></Link>
                    </List>

                </Drawer>
            </Box>

        </>
    )
}
