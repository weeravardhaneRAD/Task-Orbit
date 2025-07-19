import { useEffect, useState } from "react";
import HomePage from "./Files/HomePage"
import TaskEditPage from "./Files/TaskEditPage";
import { BackHandler } from "react-native";

const App = () => {

  // Variables ========================

  const [ActiveScreen, setActiveScreen] = useState<string>("HomePage")
  const [LastScreen, setLastScreen] = useState<string>("")
  const [ClickedId, setClickedId] = useState<number>(0)

  type TasksType = {
    id: number,
    title: string,
    note: string,
    reminders:
    [
      {
        id:number,
        year:number,
        month:number,
        day:number,
        hour:number,
        minute:number,
        note:string
      }
    ]
  }

  const [AllTasks, setAllTasks] = useState<TasksType[]>([
    {
      id: 1,
      title: "task 1",
      note: "note 1",
      reminders:
      [
        {
          id: 1,
          year: 2025,
          month: 10,
          day: 22,
          hour: 12,
          minute: 20,
          note: "hello hello hello"
        }
      ]
    }
  ])

  // ========================
  // ========================
  // ========================


  // Functions ========================

  const ScreenChange = (NewScreen:string) => {

    setLastScreen(ActiveScreen)
    setActiveScreen(NewScreen)

  }

  const onBackButtonPress = () => {
  
    console.log(ActiveScreen)
    console.log(LastScreen)

    if(ActiveScreen === "HomePage")
    {
      BackHandler.exitApp();
    }
    else
    {
      setActiveScreen(LastScreen)
    }

    return true
  
  }

  useEffect(() => {

    const BackButtonPress = BackHandler.addEventListener("hardwareBackPress", onBackButtonPress)

    return () => BackButtonPress.remove(); // remove on unmount

  }, [ActiveScreen])

  // ========================
  // ========================
  // ========================

  if(ActiveScreen==="HomePage")
  {
    return(
      <HomePage
        setActiveScreen={setActiveScreen}
        setClickedId={setClickedId}
        AllTasks={AllTasks}
        setAllTasks={setAllTasks}
        ScreenChange={ScreenChange}
      />
    )
  }
  else if(ActiveScreen==="TaskEditPage")
  {
    return(
      <TaskEditPage
        setActiveScreen={setActiveScreen}
        ClickedId={ClickedId}
        AllTasks={AllTasks}
        setAllTasks={setAllTasks}
        ScreenChange={ScreenChange}
      />
    )
  }
}

export default App;