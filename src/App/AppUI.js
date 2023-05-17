// import React from "react";
// import { TodoContext } from '../TodoContext';
// import { TodoCounter } from '../TodoCounter';
// import { TodoSearch } from '../TodoSearch';
// import { TodoList } from '../TodoList';
// import { TodoItem } from '../TodoItem';
// import { CreateTodoButton } from '../CreateTodoButton';

// function AppUI() {
//     return (                  /*REACT.FRAGMENT reemplaza a DIV*/
//     <React.Fragment>            {/*Se creo este Div porque cada componente de REACT solo soporta que le enviemos un componente*/}
//       <TodoCounter />                 {/*Aca esta el contador de ToDos*/}
//       <TodoSearch />

//       <TodoContext.Consumer>
//         {({ 
//           error,
//           loading,
//           searchedTodos,
//           completeTodo,
//           deleteTodo,
//         }) => (
//           <TodoList>
//           {error && <p>Desespérate, hubo un error...</p>}
//           {loading && <p>Estamos cargando, no desesperes...</p>}
//           {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

//           {searchedTodos.map(todo => (
//           <TodoItem
//             key={todo.text}
//             text={todo.text}
//             completed={todo.completed}          /*Cuando se manda a renderizar elementos a una lista, REACT pide que enviemos una propiedad llamada Key */
//             onComplete={() => completeTodo(todo.text)}
//             onDelete={() => deleteTodo(todo.text)}
//           />
//         ))}
//       </TodoList>
//         )}
//       </TodoContext.Consumer>

//       <CreateTodoButton />
//     </React.Fragment>
//   );
// }

// export { AppUI };

import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

          <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

          {!!openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
            
          
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
