import styles from './startMenu.module.css'
import AboutIcon from '../../../public/about.png'
import Chat from '../../../public/chat.png'
import Paint from '../../../public/paint.png'
import StartMenuItem from './startMenuItem'
import Submit from '../apps/submit'
import About from '../apps/about'

export default function StartMenu(props) {
    return (
        <div className={styles.startMenu}>
            <StartMenuItem img={AboutIcon} text="About" onClick={() => selectMenuItem(About, props.onSelect)}/>
            <StartMenuItem img={Chat} text="Submit" onClick={() => selectMenuItem(Submit, props.onSelect)}/>
            <StartMenuItem img={Paint} text="Instagram" onClick={() => openInstagram(props.onSelect)}/>
        </div>
    )
}

function selectMenuItem(menuItem, onSelect) {
    onSelect()

}

function openInstagram(onSelect) {
    onSelect()
    window.open("https://www.instagram.com/nostalgiadrive.app/", '_blank')
}