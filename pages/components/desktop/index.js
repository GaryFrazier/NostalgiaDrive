import styles from './desktop.module.css'
import React, { useState } from 'react';
import AppWindow from '../apps/appWindow'

export default function Desktop() {
    const [activeWindow, setActiveWindow] = useState("")

    return (
        <div className={styles.desktop}>
            <AppWindow keyName="about" title="About" activeWindow={activeWindow === "about"} dragStarted={(keyName) => setActiveWindow(keyName)}>
            </AppWindow>

            <AppWindow keyName="submit" title="Submit" activeWindow={activeWindow === "submit"} dragStarted={(keyName) => setActiveWindow(keyName)}>
            </AppWindow>
        </div>
    )
}