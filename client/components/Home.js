import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Footer from "./Menu/Footer";
import HomeMenu from "./Menu/HomeMenu";
import HomeNav from "./Menu/HomeNav";
import ImageSection from "./Menu/ImageSection";
import { AuthContext } from "../context/authContext";
import Card from "./PostCard/Card";
import axios from "axios";
import Search from "./Search";

const Home = () => {
  const [state] = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.menuBar}>
          <HomeMenu />
          <HomeNav />
          <Search />
          <ImageSection />
          {/* <View style={styles.text}>
            <Text style={styles.textPara}> Welcome 😎 {state?.user?.name}</Text>
            <Text style={{ textAlign: "center", paddingTop: 10}}>
              Discover seamless online shopping with our diverse product range.
            </Text>
          </View> */}
          <View style={styles.txtContainer}>
            <Text style={styles.bestSelling}>
              Best Selling
            </Text>
          </View>
          <View style={styles.cardContainer}>
            <Card />
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#d7e3fc"
  },
  menuBar: {
    paddingTop: 30,
  },
  text: {
    alignItems: "center",
    padddingTop: 20,
    textAlign: "center",
    // backgroundColor: "#03072A"
  },
  textPara: {
    fontSize: 20, 
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
    
  },
  scrollViews: {
    flex: 1,  
  },
  bestSelling: {
    fontSize: 20,
    textTransform: "uppercase",
    left: 22,
    // top: 6,
  },
  txtContainer: {
    paddingTop: 20,
  }
});

export default Home;
