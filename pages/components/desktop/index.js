import styles from './desktop.module.css'
import React, { useState } from 'react';
import AppWindow from '../apps/appWindow'

export default function Desktop() {
    const [activeWindow, setActiveWindow] = useState("")

    return (
        <div className={styles.desktop}>
            <AppWindow keyName="about" activeWindow={activeWindow === "about"} dragStarted={(keyName) => setActiveWindow(keyName)}>
            </AppWindow>

            <AppWindow keyName="submit" activeWindow={activeWindow === "submit"} dragStarted={(keyName) => setActiveWindow(keyName)}>
            </AppWindow>
        </div>
    )
}