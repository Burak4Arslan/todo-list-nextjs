import type {NextPage} from 'next';
import {Fragment} from "react";
import styles from '../styles/Home.module.css';
import Link from "next/dist/client/link";

const Home: NextPage = () => {
    return (
        <Fragment>
            <h1 className={styles.title}>
                TODO LIST
            </h1>
            <Link href={"/about"}>Go to About Page</Link>
            <Link href={"/my-todos"}>Go to TO DO Page</Link>
        </Fragment>
    );
};

export default Home
