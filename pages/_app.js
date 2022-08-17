import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import React, { useState, useEffect } from 'react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {

      // youtube api
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  })

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
   
}

export default MyApp
