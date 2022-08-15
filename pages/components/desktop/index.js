import styles from './desktop.module.css'
import React, { useState } from 'react';
import AppWindow from '../apps/appWindow'
import About from '../apps/about'
import Submit from '../apps/submit'

export default function Desktop(props) {
    return (
        <div className={styles.desktop}>
            {props.visibleWindows && props.visibleWindows["about"] && 
                <AppWindow {...props} keyName="about" title="About" activeWindow={props.activeWindow === "about"} dragStarted={(keyName) => props.setActiveWindow(keyName)}>
                    <About/>
                </AppWindow>
            }

            {props.visibleWindows && props.visibleWindows["submit"] && 
                <AppWindow {...props} keyName="submit" title="Submit" activeWindow={props.activeWindow === "submit"} dragStarted={(keyName) => props.setActiveWindow(keyName)}>
                    <Submit />
                </AppWindow>
            }
            
        </div>
    )
}