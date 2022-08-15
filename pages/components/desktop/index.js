import styles from './desktop.module.css'
import React, { useState } from 'react';
import AppWindow from '../apps/appWindow'

export default function Desktop(props) {
    const [activeWindow, setActiveWindow] = useState("")

    return (
        <div className={styles.desktop}>
            {props.visibleWindows && props.visibleWindows["about"] && 
                <AppWindow {...props} keyName="about" title="About" activeWindow={activeWindow === "about"} dragStarted={(keyName) => setActiveWindow(keyName)}>
                </AppWindow>
            }

            {props.visibleWindows && props.visibleWindows["submit"] && 
                <AppWindow {...props} keyName="submit" title="Submit" activeWindow={activeWindow === "submit"} dragStarted={(keyName) => setActiveWindow(keyName)}>
                </AppWindow>
            }
            
        </div>
    )
}