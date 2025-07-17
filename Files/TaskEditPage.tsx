import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import { useEffect, useState } from "react";
import c from "./Colors"

const TaskEditPage = (
  {
    setActiveScreen, 
    ClickedId,
    AllTasks,
    setAllTasks
  }: any) => {

    // Variables ========================

    const [Title, setTitle] = useState("")
    const [Note, setNote] = useState("")
    
    // useEffect ========================
    
    useEffect(() => {

      const ClickedItem = AllTasks.find((item: any) => {

        return item.id == ClickedId

      })

      setTitle(ClickedItem.title)
      setNote(ClickedItem.note)

    }, [])

    // ========================
    // ========================
    // ========================


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

    </SafeAreaView>
  )
}


const s = StyleSheet.create({

  sav: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: c.c2
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
    textAlignVertical: "top",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: c.c6
  },

})

export default TaskEditPage;