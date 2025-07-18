/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import s from "./Styles"
import F from "./Functions"
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Modal,
  NativeModules,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


const {NotificationModule} = NativeModules;

const HomePage = (
  {
    setActiveScreen,
    setClickedId,
    AllTasks,
    setAllTasks,
    TasksType,
    ScreenChange
  }: any) => {

  // Variables ============================

  type TasksType = {
    id: number,
    title: string,
    note: string
  }

  const [ShowingTasks, setShowingTasks] = useState<TasksType[]>([])

  useEffect(() => {

    setShowingTasks(AllTasks)
    F.RequestPermission("PostNotification")
  
  }, [AllTasks])

  const [ShowModal, setShowModal] = useState(false)
  const [NewTitle, setNewTitle] = useState("")
  const [NewNote, setNewNote] = useState("")

  // ============================
  // ============================
  // ============================


  // onPress ============================

  const onAddTaskPress = () => {

    setShowModal(true)
    NotificationModule.showNotification("Title", "Message")
  }

  const onModalAddPress = () => {

    const newId = AllTasks.length > 0 ? AllTasks[AllTasks.length-1].id + 1 : 1;
    const newArray = [...AllTasks, {id: newId, title: NewTitle.trim(), note: NewNote.trim()}];
    setAllTasks(newArray)
    setNewTitle("")
    setNewNote("")
    setShowModal(false)
  }

  const onModalClosePress = () => {

    setNewTitle("")
    setNewNote("")
    setShowModal(false)
  }


  const onTaskPress = (id: number) => {

    ScreenChange("TaskEditPage")
    setClickedId(id)
  }

  // ============================
  // ============================
  // ============================

  return (

    <SafeAreaView style={s.sav}>



      <View style={s.v1}>
        
        <TextInput
          style={s.i1}
          placeholder="Search"
        ></TextInput>
        <TouchableOpacity
          onPress={onAddTaskPress}>
          <Text style={s.t1}>+ Add Task</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={ShowModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={s.v4}>

          <View style={s.v5}>

            <View style={s.v6}>
              <Text style={s.t4}>Add New Task</Text>
            </View>

            <View style={s.v7}>
              <TextInput
                style={s.i1}
                value={NewTitle}
                onChangeText={setNewTitle}
                placeholder="Task Title"
              />
              <TextInput
                style={s.i1}
                value={NewNote}
                onChangeText={setNewNote}
                placeholder="Task Note"
              />

              <View style={s.v8}>
                <TouchableOpacity
                  onPress={onModalAddPress}
                  disabled={NewTitle.trim() ? false : true}
                  style={{opacity: NewTitle.trim() ? 1 : 0.5}}
                >
                  <Text style={s.t5}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={onModalClosePress}>
                  <Text style={s.t5}>Close</Text>
                </TouchableOpacity>
              </View>
            
            </View>
          </View>
        </View>
      </Modal>

      <View style={s.v2}>

        <ScrollView style={s.sv1}>

          <View style={s.v3}>

            {ShowingTasks.map((item, index) => (

              <TouchableOpacity
                key={item.id}
                style={s.b1}
                onPress={()=>onTaskPress(item.id)}
                >
                <Text style={s.t2}>{item.title}</Text>
                <Text style={s.t3}>{item.note}</Text>
              </TouchableOpacity>
            ))}
            
          </View>

        </ScrollView> 

      </View>

    </SafeAreaView>
  
  );
}


export default HomePage;