import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image, Button } from 'react-native';
import { SearchContext } from '../context/search';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const SearchDetails = () => {
  const [search, setSearch] = useContext(SearchContext);
  const navigation = useNavigation();
  const [count, setCount] = useState(4);

  const navigateToPostDetail = (slug) => {
    navigation.navigate("PostDetail", { slug });
  };

  const loadMore = () => {
    setCount(count + 10);
  };

  const screenWidth = Dimensions.get("window").width;
  const cardWidth = (screenWidth - 24) / 2;

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={{ marginTop: 30, textAlign: 'center', fontSize: 30, color: 'green' }}>Search Details</Text>
        <View>
          <Text style={{ marginTop: 10, textAlign: 'center', fontSize: 20, color: 'green'}}>
            {search.length < 1 ? "No Products Found" : `${search.results.length} Found Product`}
          </Text>
          <View style={styles.cardContainer}>
            {search.results.map((product) => (
              <TouchableOpacity
                key={product._id}
                onPress={() => navigateToPostDetail(product.slug)}
              >
                <View style={[styles.card, { width: cardWidth }]}>
                  <Image
                    style={styles.cardImg}
                    source={{
                      uri: `http://192.168.43.69:8000/api/v1/product/get-photo/${product._id}`,
                    }}
                  />
                  <View style={styles.cardInfo}>
                    <Text style={styles.textTitle}>
                      {product?.name.substring(0, 20)}
                    </Text>
                    <Text style={styles.textPrice}>Price: ${product?.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          {count < search.results.length && (
            <Button title="Load More" onPress={loadMore} />
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: -8,
    marginTop: 30
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    width: "48%",
    overflow: "hidden",
  },
  cardImg: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardInfo: {
    padding: 8,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
    maxHeight: 48,
  },
  textPrice: {
    fontSize: 14,
    color: "#555",
  },
});

export default SearchDetails;
