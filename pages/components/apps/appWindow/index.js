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
            className={styles.appWindow}
            bounds="parent"
            dragHandleClassName="handle"
            onMouseDown={() => { 
                props.dragStarted(props.keyName)
            }}
        >
            <div>
                <div className={`handle ${styles.windowTitle} ${props.activeWindow ? styles.active : ""}`}>
                </div>
                <div>
                    hi
                    {props.children}
                </div>
            </div>
        </Rnd>
    )
}
