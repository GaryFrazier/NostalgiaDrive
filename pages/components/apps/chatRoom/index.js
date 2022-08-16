import styles from './chatRoom.module.css'

export default function ChatRoom() {
    return (
        <div className={styles.chatRoom}>
            <iframe className={styles.iframe} src="https://e.widgetbot.io/channels/941336136566071387/941336138302521446"></iframe>
        </div>
    )
}
