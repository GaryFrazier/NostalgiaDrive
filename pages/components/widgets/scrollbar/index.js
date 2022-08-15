import styles from './scrollbar.module.css'

export default function Scrollbar(props) {

    if (props.horizontal) {
        return (
            <div className={styles.scrollbarHorizontal}>
                <div className={styles.caret}>◂</div>
                <div className={styles.scrollCenter}/>
                <div className={styles.caret}>▸</div>
            </div>
        )
    }

    return (
        <div className={styles.scrollbarVertical}>
            <div className={styles.caret}>▴</div>
            <div className={styles.scrollCenter}/>
            <div className={styles.caret}>▾</div>
        </div>
    )
}
