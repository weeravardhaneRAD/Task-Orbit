import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import c from "../Colors";

type props = {
  onPress:()=>void
}

const DrawerPlusButton = ({onPress}:props) => {

  // Variables ==============



  // ==============
  // ==============
  // ==============

  return(
    
    <TouchableOpacity
      style={s.b1}
      onPress={onPress}
    >

      <Text style={s.t1}>+</Text>

    </TouchableOpacity>
  
  )

}

const s = StyleSheet.create({

  b1: {
    width: 50,
    height: 50,
    position: "absolute",
    right: 20,
    bottom: 20,
    borderWidth: 2,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: c.c11,
    opacity: 0.8
  },
  
  t1: {
    height: "100%",
    width: "100%",
    fontSize: 40,
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 50,
    padding: 0,
    margin: 0,
  }



})

export default DrawerPlusButton;