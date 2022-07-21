
import './App.css';
import { useState } from "react";

// function TodoInput(){
//   const [value, setValue] = useState("");
//   const [todos, setTodos] = useState([]);
//   return(
//   <><label>
//       Add todo
//       <input type="text" value={value} onChange={(event) => {
//         const { target: { value } } = event;
//         setValue(value);
//       }} />
//     </label><div>
//       <button onClick={() => {
//         setTodos([...todos, { todo: value }])
//         setValue("")
//       }}>Add todo</button>
//     </div></>
//   )
// }
// function DisplayTodos({todos =[]}){
//   return (<>
// <h1>All the todos</h1>
//     {todos.map(el => {
//       return <h3>{el.todo}</h3>;
//     })}
//   </>);
// }

function TodoStats(props){
  const {todos}=props;
  return<>
  <h2>Total todos = {todos.length}</h2>
  <h2>No of todos done = {todos.filter((el)=>el.isCompleted).length}</h2>
  <h2>No of todos not done = {todos.filter((el)=>!el.isCompleted).length}{" "}</h2>
  </>
}
function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  return <div className="App">
    {/* <TodoInput/>
      <DisplayTodos/> */}
    <label>
      Add todo
      <input type="text" value={value} onChange={(event) => {
        const { target: { value } } = event;
        setValue(value);
      }} />
    </label><div>
      <button onClick={() => {
        setTodos([...todos, { todo: value, isCompleted: false }])
        setValue("")
      }}>Add todo</button>
    </div>
    <h1>All the todos</h1>
    {todos.map(el => {
      const { isCompleted, todo } = el;
      return <><p style={{ color: isCompleted ? "green" : "red" }}>{todo}</p>
        <button onClick={() => {
          const newTodoList = todos.map((el) => {
            if (el.todo === todo) {
              return { ...el, isCompleted: true };
            }
            return el;
          });
          setTodos(newTodoList)
        }}>Done</button>
      </>
    })}
    <TodoStats todos={todos}/>
  </div>
}

export default App;
