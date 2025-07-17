import { useState } from "react";
import HomePage from "./Files/HomePage"
import TaskEditPage from "./Files/TaskEditPage";

const App = () => {

  // Variables ========================

  const [ActiveScreen, setActiveScreen] = useState<string>("HomePage")
  const [ClickedId, setClickedId] = useState<number>(0)

  type TasksType = {
    id: number,
    title: string,
    note: string
  }

  const [AllTasks, setAllTasks] = useState<TasksType[]>([
    {id: 1, title: "task 1", note: "note 1"}
  ])

  // ========================

  if(ActiveScreen==="HomePage")
  {
    return(
      <HomePage setActiveScreen={setActiveScreen} setClickedId={setClickedId} AllTasks={AllTasks} setAllTasks={setAllTasks}/>
    )
  }
  else if(ActiveScreen==="TaskEditPage")
  {
    return(
      <TaskEditPage
        setActiveScreen={setActiveScreen}
        ClickedId={ClickedId}
        AllTasks={AllTasks}
        setAllTasks={setAllTasks}/>
    )
  }
}

export default App;