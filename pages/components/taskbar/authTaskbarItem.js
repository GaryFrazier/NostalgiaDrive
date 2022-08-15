import styles from './taskbar.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthTaskbarItem() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div className={styles.authItem}>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        )
      }
    return (
        <div className={styles.authItem}>
          <button onClick={() => signIn()}>Sign in</button>
        </div>
    )
}