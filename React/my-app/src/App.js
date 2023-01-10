import './App.css';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'; 

function ToDo ({todo, index, markTodo, removeTodo}){
  return(
    <div className='todo'>
      <span style={{textDecoration: todo.isCompleted ? "line-through": ""}}>{todo.text}</span>
      <div>
        <Button variant='outline-success' onClick={()=> markTodo(index)}>Done</Button>
        <Button variant='outline-danger' onClick={()=> removeTodo(index)}>Remove</Button>
      </div>
    </div>
  )
}

function FormTodo({addToDo}){
  const[value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault()
    if(!value) return;
    addToDo(value);
    setValue("");
  };

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type='text' className='input' value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo"></Form.Control>
      </Form.Group>
      <p></p>
      <Button variant='primary mb-3' type='submit'>Submit</Button>
    </Form>
  );
}

function App() {

  const[todos, setTodos] = useState([]);

  const addToDo = text => {
    const newToDos = [...todos, {text}];
    setTodos(newToDos);
  };

  const markTodo = index => {
    const newToDos = [...todos];
    newToDos[index].isCompleted = true;
    setTodos(newToDos);
  };

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  };

  return (
    <div className="App">
      <div className='container'>
        <h1 className='text-center mb-4'>Todo List</h1>
        <FormTodo addToDo={addToDo}/>
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <ToDo key={index} index={index} todo={todo} markTodo={markTodo} removeTodo={removeTodo}/>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;