import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import c from "../Colors"
import { useEffect, useState } from "react";

type props = {

  width?:number,
  height?:number,
  ButtonText?:string|number,
  setButtonText:any,
  Data:number[]
}

const ModalButton = (
  {
    width=80,
    height=30,
    ButtonText="default",
    setButtonText,
    Data
    

  }:props) => {

  // Variable ================

  const [ModalShow, setModalShow] = useState<boolean>(false)

  const [ModalData, setModalData] = useState([1, 2, 3])

  // ================
  // ================
  // ================


  // useEffect ================

  useEffect(() => {

    setModalData(Data)

  }, [Data])

  // ================
  // ================
  // ================


  // onPress ================

  const onMainButtonPress = () => {

    setModalShow(true)

  }

  const onValueButtonPress = (value:number) => {

    setButtonText(value)
    setModalShow(false)

  }

  // ================
  // ================
  // ================

  return(

    <View style={s.v1}>
      <TouchableOpacity
        style={[s.b1, {width, height}]}
        onPress={onMainButtonPress}
      >
        <Text style={s.t1}>{ButtonText}</Text>
      </TouchableOpacity>

      <Modal
        visible={ModalShow}
        animationType="slide"
        transparent={true}
        onRequestClose={()=>setModalShow(false)}
      >

      <View style={s.v2}>


        <View style={s.v3}>
        
          <View style={s.v4}>
            <Text style={s.t2}>Slect</Text>
          </View>

          <ScrollView style={s.sv1}>
            <View style={s.v5}>
              {ModalData.map((item, index) => (

                <TouchableOpacity
                  key={index}
                  style={s.b2}
                  onPress={()=>onValueButtonPress(item)}
                >
                  <Text style={s.t3}>{item}</Text>
                </TouchableOpacity>

              ))}
            </View>
          </ScrollView>

          <TouchableOpacity
            style={s.b3}
            onPress={()=>setModalShow(false)}
          >
            <Text style={s.t4}>Close</Text>

          </TouchableOpacity>

        </View>

      </View>

      </Modal>

    </View>
  )
}

const s = StyleSheet.create({

  v1: {

  },

  b1: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: c.c3,
    textAlign: "center",
    padding: 0,
    backgroundColor: c.c8,
    justifyContent: "center"
  },

  t1: {
    textAlign: "center"
  },

  v2: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },

  v3: {
    width: 200,
    height: "auto",
    maxHeight: "90%",
    borderWidth: 2,
    paddingVertical: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  b2: {
    width: 60,
    height: 20,
    borderWidth: 2,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  v4: {

  },

  t2: {
    width: 80,
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    borderWidth: 2,
    padding: 0,
    marginVertical: 10
  },

  t3: {
    fontSize: 10,
    fontWeight: "800",
    textAlign: "center"
  },

  b3: {
    justifyContent: "center",
    alignItems: "center"
  },

  t4: {
    width: 50,
    height: 30,
    fontWeight: "600",
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    marginVertical: 20
  },

  sv1: {
    width: "100%",
  },

  v5: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
})

export default ModalButton;