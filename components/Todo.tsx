import type {NextPage} from 'next';
import {Fragment, useState} from "react";
import styles from "../styles/Home.module.css";

interface TodoObjectInterface {
    name: string,
    id: number
}

interface TodoInterface {
    todo: TodoObjectInterface,
    editTodo: (a: TodoInterface) => {}
}

const Todo: NextPage = (props: TodoInterface) => {

    const [beingEdited, setBeingEdited] = useState(false);
    const [name, setName] = useState(props.todo.name);

    return (
        <Fragment>
            <div className={styles.todo}>
                {beingEdited ?
                    <input value={name} onChange={(event) => setName(event.target.value)}/>
                    : props.todo?.name}
                {beingEdited ?
                    <button onClick={() => {props.editTodo({name: name, id: props.todo.id}); setBeingEdited(false)}}>Okay</button>
                    : <button onClick={() => setBeingEdited(true)}>Edit</button>}
            </div>
        </Fragment>
    );
};

export default Todo;
export {TodoInterface};
