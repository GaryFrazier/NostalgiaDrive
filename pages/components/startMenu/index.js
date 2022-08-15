import styles from './startMenu.module.css'
import About from '../../../public/about.png'
import StartMenuItem from './startMenuItem'

export default function StartMenu() {
    return (
        <div className={styles.startMenu}>
            <StartMenuItem img={About} text="About" />
        </div>
    )
}
