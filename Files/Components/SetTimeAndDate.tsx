import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import c from "../Colors"
import { useEffect, useState } from "react";
import ModalButton from "./ModalButton";
import DeleteButton from "./DeleteButton";

// Types ===================

type Props = {
  pId:number,
  pYear:number,
  pMonth:number,
  pDay:number,
  pHour:number,
  pMinute:number,
  pNote:string,
  onDeleteButtonPress:(id:number)=>void,
  onSaveButtonPress:(pId:number, Year:number, Month:number, Day:number, Hour:number, Minute:number, Note:string)=>void

}

// ===================
// ===================
// ===================

const SetTimeAndDate = (
  {
    pId,
    pYear,
    pMonth,
    pDay,
    pHour,
    pMinute,
    pNote,
    onDeleteButtonPress,
    onSaveButtonPress,

  }:Props) => {

  // Variables ===================

  const [Year, setYear] = useState<number | undefined>(new Date().getFullYear())
  const [Month, setMonth] = useState<number | undefined>(new Date().getMonth() + 1)
  const [Day, setDay] = useState<number>(new Date().getDate() + 1)
  const [Hour, setHour] = useState<number>(new Date().getHours())
  const [Minute, setMinute] = useState<number>(new Date().getMinutes())
  const [Note, setNote] = useState<string>("")

  // ===================
  // ===================
  // ===================


  // useEffect ===================

  useEffect(() => {

    setYear(pYear)
    setMonth(pMonth)
    setDay(pDay)
    setHour(pHour)
    setMinute(pMinute)
    setNote(pNote)

  }, [pYear, pMonth, pDay, pHour, pMinute, pNote])

  // ===================
  // ===================
  // ===================


  // onPress ===================

  const onSaveButtonPress1 = () => {

    if(!Year || !Month || !Day || !Hour && Hour !== 0 || !Minute && Minute !== 0)
    {
      console.log("Please Fill All Fields")
      return
    }

    if (Month < 1 || Month > 12) {
      console.warn("Invalid month");
      return;
    }

    if (Day < 1 || Day > 31) {
      console.warn("Invalid day");
      return;
    }

    if (Hour < 0 || Hour > 23) {
      console.warn("Invalid hour");
      return;
    }

    if (Minute < 0 || Minute > 59) {
      console.warn("Invalid minute");
      return;
    }

    const date = new Date(Year, Month - 1, Day, Hour, Minute)

    if(date.getFullYear() !== Year || date.getMonth() + 1 !== Month || date.getDate() !== Day)
    {
      console.warn("Invalid date");
      return;
    }

    onSaveButtonPress(pId, Year, Month, Day, Hour, Minute, Note)

    console.log("Done")

  }

  const onDeleteButtonPress1 = () => {

    onDeleteButtonPress(pId)

  }

  // ===================
  // ===================
  // ===================


  // Functions ===================

  const GetSelectedValue = (value:number,) => {


  }

  // ===================
  // ===================
  // ===================

  return(
    <View
      style={s.v1}>

      <View style={s.v2}>
        
        <ModalButton
          width={80}
          ButtonText={Day}
          Data={Array.from({ length: 31 }, (_, i) => i + 1)}
          setButtonText={setDay}
        />

        <ModalButton
          width={80}
          ButtonText={Month}
          Data={Array.from({ length: 12 }, (_, i) => i + 1)}
          setButtonText={setMonth}
        />

        <ModalButton
          width={80}
          ButtonText={Year}
          Data={Array.from({ length: 10 }, (_, i) => 2025 + i)}
          setButtonText={setYear}
        />

      </View>

      <View
        style={s.v2}
      >
        <ModalButton
          width={100}
          ButtonText={Hour !== undefined ? Hour : "HH (0-23)"}
          Data={Array.from({ length: 24 }, (_, i) => 0 + i)}
          setButtonText={setHour}
        />

        <ModalButton
          width={100}
          ButtonText={Minute !== undefined ? Minute : "MM (0-59)"}
          Data={Array.from({ length: 60 }, (_, i) => 0 + i)}
          setButtonText={setMinute}
        />

        <TouchableOpacity
          style={s.b1}
          onPress={onSaveButtonPress1}
        >
          <Text style={s.t1}>Save</Text>
        </TouchableOpacity>

      </View>

      <View style={s.v2}>

        <TextInput
          style={s.i1}
          placeholder="Note"
          scrollEnabled={true}
          multiline={true}
          value={Note}
          onChangeText={setNote}
        ></TextInput>

        <DeleteButton
          onPress={onDeleteButtonPress1}
        />

      </View>

    </View>
  )
}

const s = StyleSheet.create({

  v1: {
    width: "95%",
    height: 150,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: c.c3,
    backgroundColor: c.c5,
    justifyContent: "center",
    alignItems: "center"
  },

  v2: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  b1: {
    width: 70,
    height: 30,
    borderWidth: 2,
    borderColor: c.c10,
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: c.c9,
  },

  t1: {
    textAlign: "center",
    padding: 0,
  },

  i1: {
    width: "80%",
    height: "90%",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    textAlign: "left",
    textAlignVertical: "center",
    borderColor: c.c1
  }
})

export default SetTimeAndDate;