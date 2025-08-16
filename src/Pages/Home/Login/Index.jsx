import { Box, Button, CssBaseline, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import authContext from '../../../Utils/AuthContext'
import { Link } from 'react-router-dom'

export default function Login() {
    const { token, handleToken } = useContext(authContext)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    // console.log(token);

    // console.log(token);


    // یک تابع هندل بنویسم که فتچ با متد پست بنویست که توکن دریافت کنم 

    return (

        <>
            <CssBaseline />
            <Box width={'100%'} height={'100vh'} bgcolor={'rgb(239 246 255) '} position={'relative'} >
                <Box height={{ xl: '60%', lg: '60%', md: '60%', sm: '70%', xs: '70%' }} p={3} width={{ xl: '60%', lg: '60%', md: '60%', sm: '70%', xs: '100%' }} bgcolor={'white'} position={'absolute'} left={'50%'} top={"50%"} sx={{ transform: 'translate(-50%,-50% )', textAlign: "center" }} borderRadius={5}
                    display={'flex'} flexDirection={"column"} gap={4}
                >
                    <Typography variant='h3' fontFamily={'RD2'} fontSize={'18px'} >جهت ورود نام کاربری و رمز عبور را وارد کنید</Typography>
                    <TextField sx={{ width: "50%", left: "50%", transform: 'translateX(-50%)' }} label={'نام کاربری'} onChange={(e) => setName(e.target.value)} />
                    <TextField sx={{ width: "50%", left: "50%", transform: 'translateX(-50%)' }} label={'رمز'} onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <Button variant='contained' sx={{ fontFamily: "RD2", width: "30%", height: "15%", left: "50%", transform: 'translateX(-50%)' }}
                    // onClick={() => {
                    //     token ? <Link to={'/adminpage'}></Link> : console.log('error');

                    // }}
                    >ورود</Button>
                </Box>
            </Box>

        </>
    )
}
