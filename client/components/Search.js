import React, { useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { SearchContext } from "../context/search";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigate = useNavigation();
  const [search, setSearch] = useContext(SearchContext);

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        `http://192.168.43.69:8000/api/v1/product/search/${search.keyword}`
      );
      setSearch({ ...search, results: data });
      navigate.navigate("search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search as you wish"
        style={styles.searchBar}
        value={search.keyword}
        onChangeText={(text) => setSearch({ ...search, keyword: text })}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Text style={styles.textSearch}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#142B33",
    height: 70,
    paddingHorizontal: 10,
    
  },
  searchBar: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    backgroundColor: "white",
    color: "black",
    borderRadius: 10,
    paddingLeft: 10,
  },
  textSearch: {
    height: 40,
    width: width * 0.25,
    marginLeft: 10,
    backgroundColor: "#ea6a30",
    padding: 10,
    textAlign: "center",
    color: "white",
    fontSize: 13,
    borderRadius: 10,
  },
});

export default Search;
