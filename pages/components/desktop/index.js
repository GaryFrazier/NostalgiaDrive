import styles from './desktop.module.css'
import AppWindow from '../apps/appWindow'

export default function Desktop() {
    return (
        <div className={styles.desktop}>
            <AppWindow></AppWindow>
            <AppWindow></AppWindow>
        </div>
    )
}