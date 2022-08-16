import styles from './startMenu.module.css'
import AboutIcon from '../../../public/about.png'
import Chat from '../../../public/chat.png'
import Paint from '../../../public/paint.png'
import Business from '../../../public/business.png'
import StartMenuItem from './startMenuItem'

export default function StartMenu(props) {
    return (
        <div className={styles.startMenu}>
            <StartMenuItem img={AboutIcon} text="About" onClick={() => selectMenuItem("about", props.onSelect, props)}/>
            <StartMenuItem img={Chat} text="Submit" onClick={() => selectMenuItem("submit", props.onSelect, props)}/>
            <StartMenuItem img={Paint} text="Instagram" onClick={() => openInstagram(props.onSelect)}/>
            <StartMenuItem img={Business} text="Discord" onClick={() => openDiscord(props.onSelect)}/>
        </div>
    )
}

function selectMenuItem(menuItem, onSelect, props) {
    onSelect()

    if (props.setVisibleWindows) {
        let newVisibleWindows = {...props.visibleWindows}
        newVisibleWindows[menuItem] = true
        props.setVisibleWindows({...newVisibleWindows})
        props.setActiveWindow(menuItem)
    }
}

function openInstagram(onSelect) {
    onSelect()
    window.open("https://www.instagram.com/nostalgiadrive.app/", '_blank')
}

function openDiscord(onSelect) {
    onSelect()
    window.open("https://discord.gg/XdZzMVzTdC", '_blank')
}