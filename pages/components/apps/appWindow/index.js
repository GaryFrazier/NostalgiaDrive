import styles from './appWindow.module.css'
import { Rnd } from 'react-rnd';

export default function AppWindow(props) {
    return (
        <Rnd
            default={{
                x: 50,
                y: 50,
                width: 320,
                height: 200,
            }}
            style={{
                zIndex: props.activeWindow ? 100 : 10,
            }}
            minWidth="200px"
            minHeight="150px"
            className={styles.appWindow}
            bounds="parent"
            dragHandleClassName="handle"
            onMouseDown={() => { 
                props.dragStarted(props.keyName)
            }}
        >
            <div className={`handle ${styles.windowTitle} ${props.activeWindow ? styles.active : ""}`}>
                {props.title}
                <button className={styles.windlowCloseButton} onClick={() => closeWindow(props)}><span>x</span></button>
            </div>
            <div className={styles.bodyContainer}>
                {props.children}
            </div>
        </Rnd>
    )
}


function closeWindow(props) {
    if (props.setVisibleWindows) {
        let newVisibleWindows = {...props.visibleWindows}
        newVisibleWindows[props.keyName] = false
        props.setVisibleWindows({...newVisibleWindows})
    }
}