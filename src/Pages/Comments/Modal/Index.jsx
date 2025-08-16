import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React, { useState } from 'react'
import { useRef } from 'react'

export default function ModalComment() {
    const [inp, setInp] = useState('')
    const handelInp = (text) => {
        setInp(text)
    }
    const [name, setName] = useState('')
    const handelName = (text) => {
        setName(text)
    }
    let fullText;
    if (!inp || !name) {
        fullText = true
    } else {
        fullText = false
    }

    return (
        <>
            <Box width={'100%'} height={'100%'}
                display={'flex'} justifyContent={'center'} alignItems={'center'}
            >
                <Box bgcolor={'white'} width={{ xl: '30%', lg: '35%', md: '40%', sm: '50%', xs: '80%' }} height={'45%'} borderRadius={5} display={'flex'} flexDirection={"column"} gap={2} paddingInline={5} justifyItems={'center'} >
                    <Typography fontFamily={"RD2"} fontSize={'18px'} fontWeight={600} sx={{ direction: 'ltr', lineHeight: "80px", }}   >متن دیدگاه:
                    </Typography>

                    <TextField sx={{ fontFamily: 'RD2' }} label='نام و نام خانوادگی ' onChange={(e) => handelName(e.target.value)} />

                    <TextField multiline sx={{ fontFamily: 'RD2' }} label='نظر شما' onChange={(e) => handelInp(e.target.value)} />



                    <Box width={'100%'} display={'flex'} justifyContent={'center'}>
                        <Button variant='contained' sx={{ font: 'RD2', width: "30%", fontFamily: 'RD2' }} disabled={fullText} >ثبت نظر</Button>
                    </Box>
                </Box>
            </Box>

        </>
    )
}
