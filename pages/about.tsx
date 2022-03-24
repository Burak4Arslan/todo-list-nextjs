import type {NextPage} from 'next';
import styles from '../styles/Home.module.css';
import {Fragment} from "react";
import Link from "next/dist/client/link";

const About: NextPage = () => {
    return (
        <Fragment>
            <h1 className={styles.title}>
                Welcome to About Page
            </h1>
            <Link href={"/"}>Go to Home Page</Link>
        </Fragment>
    );
};

export default About
