import Head from 'next/head'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import Desktop from './components/desktop'
import TaskBar from './components/taskBar'

export default function Home() {
  const [visibleWindows, setVisibleWindows] = useState({}) // set default windows here!

  return (
    <div className={styles.container}>
      <TaskBar visibleWindows={visibleWindows} setVisibleWindows={setVisibleWindows}/>
      <Desktop visibleWindows={visibleWindows} setVisibleWindows={setVisibleWindows}/>
    </div>
  )
}
