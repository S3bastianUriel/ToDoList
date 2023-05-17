import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;





// function App() {
//   return (    /*REACT.FRAGMENT reemplaza a DIV*/
//     <React.Fragment> {/*Se creo este Div porque cada componente de REACT solo soporta que le enviemos un componente*/}
//       <TodoCounter />   {/*Aca esta el contador de ToDos*/}
//       <TodoSearch />

//       <TodoList>
//         {todos.map(todo => (
//           <TodoItem key={todo.text} text={todo.text} completed={todo.completed} /> /*Cuando se manda a renderizar elementos a una lista, REACT pide que enviemos una propiedad llamada Key */
//         ))}
//       </TodoList>

//       <CreateTodoButton />
//     </React.Fragment>
//   );
// }

// export default App;
