import styles from './taskbar.module.css'
import StartButton from './startButton'
import AuthTaksbarItem from './authTaskbarItem'

export default function Taskbar() {
    return (
        <div className={styles.taskbar}>
            <StartButton />
            <AuthTaksbarItem />
        </div>
    )
}