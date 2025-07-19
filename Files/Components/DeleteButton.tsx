import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import c from "../Colors";

// Types ================

type Props = {
  width?:number,
  height?:number,
  onPress:()=>void
}

// ================
// ================
// ================

const DeleteButton = (
  {
    width=20,
    height=20,
    onPress

  }:Props
) => {

  return(

    <TouchableOpacity
      style={[s.b1, {width, height}]}
      onPress={onPress}
    >
      <Text style={[s.t1, {lineHeight: Math.max(12, height - 2)}]}>X</Text>
    </TouchableOpacity>
  )

}

const s = StyleSheet.create({

  b1: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: c.c12,
    borderWidth: 2,
    borderColor: c.c13
  },

  t1: {
    fontWeight: "800",
    textAlign: "center"
  }
})

export default DeleteButton;