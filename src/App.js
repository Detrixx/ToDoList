import "./App.css";
import { useState } from "react";
import { List } from "./List";
import { Input } from "./Input";

function App() {
  const [text, setText] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const addToList = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      name: text,
      complete: false,
    };
    setToDoList([...toDoList, task]);
  };

  const removeFromList = (id) => {
    setToDoList(toDoList.filter((task) => (task.id === id ? false : true)));
  };
  const completeTask = (id) => {
    setToDoList(
      toDoList.map((task) => {
        return task.id === id ? { ...task, complete: true } : task;
      })
    );
  };

  return (
    <div className="App">
      <div className="input">
        <Input handleChange={handleChange} addToList={addToList} />
      </div>

      <div className="list">
        {toDoList.map((task) => {
          return (
            <List
              name={task.name}
              id={task.id}
              removeFromList={removeFromList}
              completeTask={completeTask}
              complete={task.complete}
            ></List>
          );
        })}
      </div>
    </div>
  );
}

export default App;
