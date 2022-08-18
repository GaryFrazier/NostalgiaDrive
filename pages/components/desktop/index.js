import styles from './desktop.module.css'
import React, { useState } from 'react';
import AppWindow from '../apps/appWindow'
import About from '../apps/about'
import Submit from '../apps/submit'
import Video from '../apps/video'
import ChatRoom from '../apps/chatRoom'
import AppIcon from '../widgets/appIcon'

import WatchParty from '../../../public/watchParty.png'
import Business from '../../../public/business.png'

export default function Desktop(props) {
    return (
        <div className={styles.desktop}>
            {props.visibleWindows && props.visibleWindows["about"] && 
                <AppWindow {...props} keyName="about" title="About" activeWindow={props.activeWindow === "about"} dragStarted={(keyName) => props.setActiveWindow(keyName)}>
                    <About/>
                </AppWindow>
            }

            {props.visibleWindows && props.visibleWindows["submit"] && 
                <AppWindow {...props} minHeight={"300px"} minWidth={"300px"} keyName="submit" title="Submit" activeWindow={props.activeWindow === "submit"} dragStarted={(keyName) => props.setActiveWindow(keyName)}>
                    <Submit {...props} />
                </AppWindow>
            }

            {props.visibleWindows && props.visibleWindows["video"] && 
                <AppWindow {...props} keyName="video" title="Video Player" activeWindow={props.activeWindow === "video"} 
                    dragStarted={(keyName) => props.setActiveWindow(keyName)}
                    defaultWidth={400}
                    defaultHeight={400}
                    minWidth={"640px"}
                    minHeight={"440px"}
                >
                    <Video />
                </AppWindow>
            }

            {props.visibleWindows && props.visibleWindows["chatRoom"] && 
                <AppWindow {...props} keyName="chatRoom" title="Chat Room" activeWindow={props.activeWindow === "chatRoom"} 
                    dragStarted={(keyName) => props.setActiveWindow(keyName)}
                    defaultWidth={400}
                    defaultHeight={500}
                    minWidth={"400px"}
                    minHeight={"500px"}
                >
                    <ChatRoom />
                </AppWindow>
            }
            
            <div className={styles.appList}>
                <AppIcon img={WatchParty} text={"Video Player"} onClick={() => openApp("video", props)}/>
                <AppIcon img={Business} text={"Chat Room"} onClick={() => openApp("chatRoom", props)}/>
            </div>
        </div>
    )
}

function openApp(app, props) {
    if (props.setVisibleWindows) {
        let newVisibleWindows = {...props.visibleWindows}
        newVisibleWindows[app] = true
        props.setVisibleWindows({...newVisibleWindows})
        props.setActiveWindow(app)
    }
} 