import styles from './appWindow.module.css'
import { Rnd } from 'react-rnd';

export default function AppWindow(props) {
    return (
        <Rnd
            default={{
                x: 0,
                y: 0,
                width: 320,
                height: 200,
            }}
            className={styles.appWindow}
            bounds="parent"
            dragHandleClassName="handle"
        >
            <div>
                <div className="handle">
                    handle
                    
                
                </div>
                <div>
                    hi
                    {props.children}
                </div>
            </div>
        </Rnd>
    )
}
