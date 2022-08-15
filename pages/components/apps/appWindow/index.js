import styles from './appWindow.module.css'
import Draggable from 'react-draggable'

export default function AppWindow(props) {
    return (
        <Draggable
            bounds="parent"
            handle=".handle"
        >
            <div className="appWindow handle">
                appwindow
                {props.children}
            </div>
        </Draggable>
    )
}
