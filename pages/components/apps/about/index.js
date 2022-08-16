import styles from './about.module.css'
import Scrollbar from '../../widgets/scrollbar'

export default function About() {
    return (
        <div className={styles.about}>
            <div className={styles.textContainer}>
                <div className={styles.textArea}>
                    <pre className={styles.textPre}>
                        Nostalgia Drive's goal is to create a community of user-driven nostalgia. By submitting long-forgotten content, you can help others uncover core memories. Join the community to reminisce with other like-minded people!

                        <br /><br />For business inquiries contact garyfrazier953@gmail.com

                    </pre>
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
