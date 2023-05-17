import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {                 //Aca se va a consumir el estado
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    const onChange = (event) => {           //event, se recibe el texto de la escritura del usuario en la parte de textArea
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();         //Este EVENT hace que no se recargue la pagina al hacer click en SUBMIT
        addTodo(newTodoValue);
        setOpenModal(false)         //esto es para cerrar el Modal luego de añadir el ToDo
    };

    
    return (

        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="placeholder"
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    type="submit"
                    // onClick={onSubmit}
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };