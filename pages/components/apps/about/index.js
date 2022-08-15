import styles from './about.module.css'
import Scrollbar from '../../widgets/scrollbar'

export default function About() {
    return (
        <div className={styles.about}>
            <div className={styles.textContainer}>
                <div className={styles.textArea}>
                </div>
                <Scrollbar/>
            </div>
            <div className={styles.bottomContainer}>
                <Scrollbar horizontal/>
                <div className={styles.corner} />
            </div>
        </div>
    )
}
