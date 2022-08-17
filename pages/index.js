import Head from 'next/head'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import Desktop from './components/desktop'
import TaskBar from './components/taskBar'

export default function Home() {
  const [visibleWindows, setVisibleWindows] = useState({chatRoom: true}) // set default windows here!
  const [activeWindow, setActiveWindow] = useState("")

  return (
    <div className={styles.container}>
      <TaskBar 
        activeWindow={activeWindow}
        setActiveWindow={setActiveWindow}
        visibleWindows={visibleWindows} 
        setVisibleWindows={setVisibleWindows}/>
      <Desktop 
        activeWindow={activeWindow}
        setActiveWindow={setActiveWindow}
        visibleWindows={visibleWindows} 
        setVisibleWindows={setVisibleWindows}/>
    </div>
  )
}
