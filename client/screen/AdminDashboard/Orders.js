import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

function Orders() {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Delivered",
    "Canceled",
  ]);
  const [changeStatus, setChangeStatus] = useState("");
  const [orders, setOrders] = useState([]); 
  console.log(orders)

  const getOrders = async () => {
    try {
      const response = await axios.get(`http://192.168.43.69:8000/api/v1/order/get-all-orders`);
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();  
  }, []);

  const handleChange = async (orderId, value) => {
    try {
      const response = await axios.put(`http://192.168.43.69:8000/api/v1/order/order-status/${orderId}`, {
        status: value,
      });
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={{ textAlign: 'center', marginTop: 10}}>All Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => (
          <View style={{ borderWidth: 1, borderColor: 'black' }}>
            <Text>Order {index + 1}</Text>
            <Text>Status:</Text>
            <TouchableOpacity
              onPress={() => handleChange(item._id, value)}
            >
              <Text>{item.status}</Text>
            </TouchableOpacity>
            <Text>Buyer: {item.buyer?.name}</Text>
            <Text>Created At: {item.createAt}</Text>
            <Text>Payment: {item.payment.success ? "Success" : "Failed"}</Text>
            <Text>Quantity: {item.products?.length}</Text>

            <FlatList
              data={item.products}
              keyExtractor={(product) => product._id}
              renderItem={({ product }) => (
                <View style={{ flexDirection: 'row', marginBottom: 2, padding: 3 }}>
                  <Image
                    source={{ uri: `http://192.168.43.69:8000/api/v1/product/get-photo/${product?._id}` }}
                    style={{ width: 100, height: 100 }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text>{product.name}</Text>
                    <Text>{product.description.substring(0, 30)}</Text>
                    <Text>Price: {product.price}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        )}
      />
    </View>
  );
}

export default Orders;
