import type {NextPage} from 'next';
import {Fragment} from "react";
import styles from '../../styles/Home.module.css';
import Link from "next/dist/client/link";
import MyApp from "../_app";

const DailyTodos: NextPage = () => {
    return (
        <Fragment>
            <h1 className={styles.title}>
                Welcome to Daily To Do Page
            </h1>
            <div className={styles.navlinks}>
                <Link href={"/"}>Go to Home Page</Link>
            </div>
        </Fragment>
    );
};

export default DailyTodos;
