import styles from './appWindow.module.css'
import { Rnd } from 'react-rnd';

export default function AppWindow(props) {
    return (
        <Rnd
            default={{
                x: 100,
                y: 200,
                width: props.defaultWidth || 320,
                height: props.defaultHeight || 200,
            }}
            style={{
                zIndex: props.activeWindow ? 100 : 10,
            }}
            minWidth={props.minWidth || "300px"}
            minHeight={props.minHeight || "250px"}
            className={styles.appWindow}
            bounds="parent"
            dragHandleClassName="handle"
            cancel={"." + styles.windlowCloseButton}
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