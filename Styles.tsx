import { StyleSheet } from "react-native";

const c1 = "#cbca66ff";
const c2 = "#f8f5c3ff";
const c3 = "#929016ff";
const c4 = "#a7a70cff";
const c5 = "#e8e8acff";

const s = StyleSheet.create({
  
  sav: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: c2
  },
  
  v1: {
    height: 150,
    width: "90%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: c3,
    marginTop: 10
  },
  
  i1: {
    height: 50,
    width: "90%",
    borderWidth: 3,
    borderColor: c1,
    backgroundColor: c2,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#1B3B6F",
    textShadowColor: "#000000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10
  },

  t1: {
    fontSize: 18,
    fontWeight: "bold",
    color: c3,
    backgroundColor: c2,
    paddingVertical: 5,
    paddingHorizontal: 50,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: c1,
    textAlign: "center",
    elevation: 50,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  
  v2: {
    flex: 1,
    width: "90%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: c3,
    marginVertical: 10
  },

  sv1: {
    width: "100%"
  },
  
  v3: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10
  },

  b1: {
    width: "95%",
    maxHeight: 100,
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: c5,
    borderTopColor: '#bab94d',
    borderLeftColor: '#b2b128',
    borderRightColor: '#f5f5cc',
    borderBottomColor: '#ffffe0',
    elevation: 6,
    shadowColor: c3,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  t2: {
    width: "100%",
    fontSize: 25,
    fontWeight: "900",
    color: c3,
    textAlign: "left"
  },

  t3: {
    width: "100%",
    fontSize: 20,
    color: c4,
    textAlign: "left",
    opacity: 0.9
  }
})

export default s;