/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import s from "./Styles"
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


const App = () => {

  // Variables ============================

  type Tasks = {
    id: number,
    title: string,
    note: string
  }

  const [AllTasks, setAllTasks] = useState<Tasks[]>([
    {id: 1, title: "task 1", note: "note 1"}
  ])
  const [ShowingTasks, setShowingTasks] = useState<Tasks[]>([])

  useEffect(() => {

    setShowingTasks(AllTasks)
  
  }, [AllTasks])

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
        <TouchableOpacity>
          <Text style={s.t1}>+ Add Task</Text>
        </TouchableOpacity>
      </View>

      <View style={s.v2}>

        <ScrollView style={s.sv1}>

          <View style={s.v3}>
            {ShowingTasks.map((item, index) => (

              <TouchableOpacity key={index} style={s.b1}>
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


export default App;