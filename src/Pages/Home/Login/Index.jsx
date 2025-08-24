import { Box, Button, CssBaseline, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import authContext from '../../../Utils/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
// import toast from 'react-hot-toast'


export default function Login() {

    const navigate = useNavigate()
    const { handleToken } = useContext(authContext)
    const [fname, setFname] = useState('')
    const [password, setPassword] = useState('')
    const handeleLogin = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/v1/user", {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify({
                    Fname: fname,
                    Password: password
                })

            })

            const data = await res?.json()


            if (data?.token) {
                handleToken(data.token);
                localStorage.setItem("token", data.token);
                navigate("/adminpage");
            }
        } catch (error) {
            console.log(error);

        }
    }


    return (

        <>
            <CssBaseline />
            <Box width={'100%'} height={'100vh'} bgcolor={'rgb(239 246 255) '} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Box height={'auto'} p={3} width={{ xl: '35%', lg: '35%', md: '50%', sm: '90%', xs: '90%' }} bgcolor={'white'} sx={{ textAlign: "center" }} borderRadius={5}
                    display={'flex'} flexDirection={"column"} gap={4} alignItems={'center'}
                >
                    <Typography variant='h3' fontFamily={'RD2'} fontSize={'18px'} >جهت ورود نام کاربری و رمز عبور را وارد کنید</Typography>
                    <TextField sx={{ width: "80%" }} label={'نام کاربری'} onChange={(e) => setFname(e.target.value)} />
                    <TextField sx={{ width: "80%" }} label={'رمز'} onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant='contained' sx={{ fontFamily: "RD2", width: "50%", }}
                        onClick={() => {
                            handeleLogin()
                        }}
                    >ورود</Button>
                </Box>
            </Box>

        </>
    )
}
