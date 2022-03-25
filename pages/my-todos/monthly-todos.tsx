import type {NextPage} from 'next';
import {Fragment, useState} from "react";
import styles from '../../styles/Home.module.css';
import Link from "next/dist/client/link";
import {TodoInterface} from "../../components/Todo";
import TodoList from "../../components/TodoList";
const _ = require("lodash");

const MonthlyTodos: NextPage = () => {

    const [monthlyTodos, setMonthlyTodos] = useState([]);

    function addTodo() {
        const temptodo = {name: "New Monthly Todo", id: _.uniqueId()};
        const tempMonthlyTodos = [...monthlyTodos];
        tempMonthlyTodos.push(temptodo);
        setMonthlyTodos(tempMonthlyTodos);
    }

    function editTodo(newValues: TodoInterface) {
        const index: number = monthlyTodos.findIndex(todo => todo.id===newValues.id);
        const tempMonthlyTodos = [...monthlyTodos];
        tempMonthlyTodos[index] = newValues;
        setMonthlyTodos(tempMonthlyTodos);
    }
    
    return (
        <Fragment>
            <h1 className={styles.title}>
                Welcome to Monthly To Do Page
            </h1>
            <div className={styles.navlinks}>
                <Link href={"/"}>Go to Home Page</Link>
            </div>
            <button onClick={addTodo} className={styles.addTodoButton}>Add Monthly To Do</button>
            <TodoList todoList={monthlyTodos} editTodo={editTodo}/>
        </Fragment>
    );
};

export default MonthlyTodos;
