import type {NextPage} from 'next';
import {Fragment} from "react";
import styles from '../styles/Home.module.css';
import Link from "next/dist/client/link";

const Home: NextPage = () => {
    return (
        <Fragment>
            <h1 className={styles.title}>
                TODO LIST APP
            </h1>
            <div className={styles.navlinks}>
                <Link href={"/my-todos/daily-todos"}>Go to Daily TO DO Page</Link>
                <Link href={"/my-todos/monthly-todos"}>Go to Montly TO DO Page</Link>
            </div>
        </Fragment>
    );
};

export default Home
