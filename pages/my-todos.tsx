import type {NextPage} from 'next';
import {Fragment} from "react";
import styles from '../styles/Home.module.css';
import Link from "next/dist/client/link";
import MyApp from "./_app";

const MyTodos: NextPage = () => {
    return (
        <Fragment>
            <h1 className={styles.title}>
                Welcome to To Do Page
            </h1>
            <Link href={"/"}>Go to Home Page</Link>
        </Fragment>
    );
};

export default MyTodos
