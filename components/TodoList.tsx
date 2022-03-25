import type {NextPage} from 'next';
import {Fragment} from "react";
import styles from "../styles/Home.module.css";
import Todo from "./Todo";
import {TodoInterface} from "./Todo";

interface TodoListPropsInterface {
    todoList: TodoInterface[]
    changeTodo: (a: TodoInterface) => {}
}

const TodoList: NextPage = (props: TodoListPropsInterface) => {

    return (
        <Fragment>
            {props.todoList?.map((todo) => {
                return <Todo todo={todo} key={todo.id} changeTodo={props.changeTodo}/>
            })}
        </Fragment>
    );
};

export default TodoList;
