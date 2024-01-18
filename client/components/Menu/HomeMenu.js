import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const HomeMenu = () => {
   

  const [state] = useContext(AuthContext);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.TextColor}>MSM Store</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#142B33",
    // height: 50,
  },
  TextColor: {
    color: "#ffffff",
    padding: 13,
    textTransform: "uppercase",
    fontSize: 17,
  },
 
});

export default HomeMenu;
