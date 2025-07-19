import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import c from "./Colors"
import SetTimeAndDate from "./Components/SetTimeAndDate";
import ModalButton from "./Components/ModalButton";
import DrawerPlusButton from "./Components/DrawerPlusButton";

// Types ========================

type ReminderType = {
  id: number;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  note: string;
};

type DataObjType = {
  title:string,
  note:string,
  reminders:ReminderType[]
}
// ========================
// ========================
// ========================

const TaskEditPage = (
  {
    setActiveScreen, 
    ClickedId,
    AllTasks,
    setAllTasks
  }: any) => {



    // Variables ========================

    const [DataObj, setDataObj] = useState<DataObjType>()
    const [Title, setTitle] = useState("")
    const [Note, setNote] = useState("")
    
    // ========================
    // ========================
    // ========================


    // useEffect ========================
    
    useEffect(() => {

      const ClickedItem = AllTasks.find((item: any) => {

        return item.id == ClickedId

      })

      setDataObj(ClickedItem)
      setTitle(ClickedItem.title)
      setNote(ClickedItem.note)

    }, [])

    // ========================
    // ========================
    // ========================


    // onPress ========================

    const onDrawerPlusButtonPress = () => {

      if(DataObj)
      {
        const newId = DataObj.reminders ? DataObj.reminders[DataObj.reminders.length - 1].id + 1 : 1;

        const newObj =
        {
          id: newId,
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          day: new Date().getDate() + 1,
          hour: new Date().getHours(),
          minute: new Date().getMinutes(),
          note: ""
        }

        const newArray1 = [...DataObj.reminders, newObj]

        setDataObj({...DataObj, reminders: newArray1})

        const newArray2 = AllTasks.map((item:any)=>{

          if(item.id === ClickedId)
          {
            return {...item, reminders: newArray1}
          }
          else
          {
            return item
          }

        })

        setAllTasks(newArray2)
      }

    }

    const onDeleteButtonPress = (id:number) => {

      if(DataObj?.reminders)
      {
        const newArray1 = DataObj?.reminders.filter((item:any) => {

          if(item.id !== id)
          {
            return item
          }

        })

        setDataObj({...DataObj, reminders: newArray1})


        const newArray2 = AllTasks.map((item:any) => {

          if(item.id === ClickedId)
          {
            return {...item, reminders: newArray1}
          }
          else
          {
            return item
          }
        })

        setAllTasks(newArray2)

      }

    }

    const onSaveButtonPress = (pId:number, Year:number, Month:number, Day:number, Hour:number, Minute:number, Note:string) => {

      if(DataObj?.reminders)
      {
        const newArray1 = DataObj.reminders.map((item:any) => {

          if(item.id === pId)
          {
            return {...item, year: Year, month: Month, day: Day, hour: Hour, minute: Minute, note: Note}
          }
          else
          {
            return item
          }
        })

        setDataObj({...DataObj, reminders: newArray1})


        const newArray2 = AllTasks.map((item:any) => {

          if(item.id === ClickedId)
          {
            return {...item, reminders: newArray1}
          }
          else
          {
            return item
          }
        })

        setAllTasks(newArray2)
      }

    }

    // ========================
    // ========================
    // ========================

  return(
    
    <SafeAreaView style={s.sav}>
      
      <TextInput
        style={s.i1}
        value={Title ? Title : ""}
        onChangeText={setTitle}
        multiline={true}
        scrollEnabled={true}
      ></TextInput>

      <TextInput
        style={s.i2}
        value={Note ? Note : ""}
        onChangeText={setNote}
        multiline={true}
        scrollEnabled={true}
      ></TextInput>

      <View style={s.v1}>
        
        <ScrollView style={s.sv1}>

          <View style={s.v2}>

            {DataObj?.reminders.map((item:any, index:number)=>(

              <SetTimeAndDate
                key={index}
                pId={item.id}
                pYear={item.year}
                pMonth={item.month}
                pDay={item.day}
                pHour={item.hour}
                pMinute={item.minute}
                pNote={item.note}
                onDeleteButtonPress={onDeleteButtonPress}
                onSaveButtonPress={onSaveButtonPress}
              />

            ))}

          </View>

        </ScrollView>

      </View>

      <DrawerPlusButton onPress={onDrawerPlusButtonPress}/>

    </SafeAreaView>
  )
}


const s = StyleSheet.create({

  sav: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: c.c2,
  },
  
  i1: {
    width: "60%",
    height: 80,
    fontSize: 22,
    fontWeight: "bold",
    color: c.c3,
    marginTop: 20,
    paddingHorizontal: 16,
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: c.c6
  },

  i2: {
    width: "95%",
    minHeight: 50,
    maxHeight: 150,
    fontSize: 16,
    color: c.c4,
    marginTop: 20,
    padding: 12,
    backgroundColor: c.c7,
    textAlignVertical: "center",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: c.c6
  },

  v1: {
    flex: 1,
    width: "95%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 2
  },

  sv1: {
    width: "100%",
    height: "100%",
  },

  v2: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }

})

export default TaskEditPage;