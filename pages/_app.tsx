import '../styles/globals.css'
import type {AppProps} from 'next/app'
import styles from '../styles/Home.module.css';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Component {...pageProps} />
            </main>
        </div>
    )
}

export default MyApp
