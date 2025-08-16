import React, { useEffect, useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home/Index'
import Login from './Pages/Home/Login/Index'
import authContext from './Utils/AuthContext'
import AdminPage from './Pages/Admin/Index'
import TextComment from './Pages/Admin/TextComment/Index'
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from '@mui/stylis-plugin-rtl';
export default function App() {
  const [token, setToken] = useState('')
  const rtlCache = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  useEffect(() => {
    handleToken(localStorage.getItem('token'))
  }, [])
  const handleToken = (tk) => {
    setToken(tk);
  };
  return (
    <>
      <CacheProvider value={rtlCache}>
        <authContext.Provider value={{ token, handleToken }} >
          <Routes>
            <Route path='/' exact={true} element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/adminpage' element={<AdminPage />} />
            <Route path='/adminpage/comment' element={<TextComment />} />
          </Routes>
        </authContext.Provider>
      </CacheProvider>
    </>
  )
}
