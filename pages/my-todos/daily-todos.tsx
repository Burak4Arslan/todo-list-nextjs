import type {NextPage} from 'next';
import {Fragment, useState, useEffect} from "react";
import styles from '../../styles/Home.module.css';
import Link from "next/dist/client/link";
import TodoList from "../../components/TodoList";
import {TodoInterface} from "../../components/Todo";
const _ = require("lodash");

const DailyTodos: NextPage = () => {

    const [dailyTodos, setDailyTodos] = useState([]);

    function addTodo() {
        const temptodo = {name: "new Todo", id: _.uniqueId()};
        const tempDailyTodos = [...dailyTodos];
        tempDailyTodos.push(temptodo);
        setDailyTodos(tempDailyTodos);
    }
    
    function editTodo(newValues: TodoInterface) {
        const index: number = dailyTodos.findIndex(todo => todo.id===newValues.id);
        const tempDailyTodos = [...dailyTodos];
        tempDailyTodos[index] = newValues;
        setDailyTodos(tempDailyTodos);
    }

    return (
        <Fragment>
            <h1 className={styles.title}>
                Welcome to Daily To Do Page
            </h1>
            <div className={styles.navlinks}>
                <Link href={"/"}>Go to Home Page</Link>
            </div>
            <button onClick={addTodo} className={styles.addTodoButton}>Add Daily To Do</button>
            <TodoList todoList={dailyTodos} editTodo={editTodo}/>
        </Fragment>
    );
};

export default DailyTodos;
