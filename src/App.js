import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import Icon from '@atlaskit/icon';
import { useState } from 'react';
import {v4} from 'uuid';

function App() {
  const onTextInputChange = (e) => {
    setTextInput(e.target.value)
  };

  const onAddButtonClick = (e) => {
    // Thêm text input vào danh sách todoList
    setTodoList([...todoList, {id: v4(), name: textInput, isCompleted: false}])
  }

  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState('');
  return (
    <>
      <p> Danh sách việc cần làm</p>
      <TextField name="add-todo" placeholder='Thêm việc cần làm ...' elemAfterInput={
        <Button 
          isDisabled={!textInput} 
          appearance='primary'
          onClick={onAddButtonClick}
       >Thêm</Button>
      } css = {
        {padding: "2px 4px 2px"}
      }
      value={textInput}
      onChange={onTextInputChange}
      ></TextField>
      <TodoList todoList={todoList}/>
    </>
    
  );
}

export default App;
