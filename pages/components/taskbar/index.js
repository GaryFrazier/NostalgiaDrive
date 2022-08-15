import styles from './taskbar.module.css'
import StartButton from './startButton'
import AuthTaksbarItem from './authTaskbarItem'

export default function Taskbar(props) {
    return (
        <div className={styles.taskbar}>
            <StartButton {...props} />
            <AuthTaksbarItem {...props} />
        </div>
    )
}