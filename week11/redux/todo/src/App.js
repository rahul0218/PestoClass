
import './App.css';
import { createContext, useContext, useState } from "react";

function TodoInput(){
  const [value, setValue] = useState("");
  // const [todos, setTodos] = useState([]);
  const {todos = [], setTodos} = useContext(TodosContext);
  return(
  <><label>
      Add todo
      <input type="text" value={value} onChange={(event) => {
        const { target: { value } } = event;
        setValue(value);
      }} />
    </label><div>
      <button onClick={() => {
        setTodos([...todos, { todo: value }])
        setValue("")
      }}>Add todo</button>
    </div></>
  )
}
function DisplayTodos(){
  const {todos = [],setTodos} = useContext(TodosContext);
  return (<>
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
  </>);
}

function TodoStats(){
  const {todos, setTodos}=useContext(TodosContext);
  return<>
  <h2>Total todos = {todos.length}</h2>
  <h2>No of todos done = {todos.filter((el)=>el.isCompleted).length}</h2>
  <h2>No of todos not done = {todos.filter((el)=>!el.isCompleted).length}{" "}</h2>
  <button onClick={(()=>{
    setTodos(todos.map(el=>{
      return { ...el, isCompleted: true};
    })
    );
  })}>Mark all as completed</button>
  </>
}
const TodosContext = createContext();
function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <TodosContext.Provider value={{todos, setTodos}}>
  <div className="App">
     <TodoInput/>
      
    
    <hr/>
    <DisplayTodos/>
    <hr/>
    <TodoStats/>
    
  </div></TodosContext.Provider>);
}

export default App;
