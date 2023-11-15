/**
 * My To Do List App
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,

} from 'react-native';


import ToDoForm from './ToDoForm';
import ToDoList from './ToDpList';


function App() {

  const [tasks, setTasks] = useState(
    [
      'Do laundry',
      'Go to gym',
      'Walk dog'
    ]
  );

  const handleAdd = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <SafeAreaView style={backgroundStyle}>     
      <ToDoList tasks={tasks}/>
      <ToDoForm onAdd = {handleAdd} />
    </SafeAreaView>
  );
}



export default App;
