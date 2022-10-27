import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
function App() {
  const[showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Do homework',
        day: 'August 6th at 1:00pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Watch Movie',
        day: 'August 9th at 10:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Developing',
        day: 'Aug 10th at 5:10pm',
        reminder: false,
    },
])

//add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 100000) + 1
  const newTasks = {id, ...task}

  setTasks([...tasks, newTasks])
}
//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

//Toggle reminder

const toggleReminder= (id) => {
  setTasks(
    tasks.map((task) => 
  task.id === id ? { ...task, reminder: !task.reminder } : 
  task))
}
  return (
    <div className="container">
    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd= {showAddTask}/>
    {showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete=
    {deleteTask} onToggle= {toggleReminder}/> :
     ('No Tasks To Show') }

    </div>
  )
}

export default App;
