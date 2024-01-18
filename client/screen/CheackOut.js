import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import StripeCheckOut from "react-stripe-checkout";

const CheackOut = ({ navigation, subTotal }) => {
  const handleCOD = () => {
    alert("Your Order Has Been Placed Successfully");
  };
  // const handleOnline = () => {
  //   alert("Your Redirecting to payment gateway");
  //   navigation.navigate("payment");
  // };

  const handleOnline = async () => {
    alert("Your Redirecting to payment gateway");
    navigation.navigate("payment");
  };

  const tokenHandler = ({token}) => {
    console.log(token)
  }

  return (
    <View>
      {/* <StripeCheckOut
        amount={subTotal * 100}
        // token={tokenHandler}
        stripeKey="pk_test_51NmvjYSJMmMS2PKYPTmToXg9wC1zicQF8uOorOJ0BcYOioztEhncFCsEE3NfcBEjr7XqJhzCldWd0RfK0tUHZ3mW00ISvW0iwa"
        currency="USD"
      >
        <TouchableOpacity>
          <Text>Pay Now</Text>
        </TouchableOpacity>
      </StripeCheckOut> */}
    </View>
    // <View style={Styles.container}>
    //   <Text style={Styles.heading}>Payment Options</Text>
    //   <Text style={Styles.price}>Total Amount : ${total}</Text>
    //   <View style={Styles.paymentCard}>
    //     <Text style={Styles.paymentHeading}>Select your Payment Mode</Text>
    //     <TouchableOpacity style={Styles.paymentBtn} onPress={handleCOD}>
    //       <Text style={Styles.paymentBtnText}>Cash On Delivery</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={Styles.paymentBtn}
    //     // onPress={handelPay}

    //     >
    //       <Text style={Styles.paymentBtnText}>
    //         Online (CREDIT | DEBIT CARD)
    //       </Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
    color: "gray",
  },
  paymentCard: {
    backgroundColor: "#ffffff",
    width: "90%",
    borderRadius: 10,
    padding: 30,
    marginVertical: 10,
  },
  paymentHeading: {
    color: "gray",
    marginBottom: 10,
  },
  paymentBtn: {
    backgroundColor: "#000000",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    marginVertical: 10,
  },
  paymentBtnText: {
    color: "#ffffff",
    textAlign: "center",
  },
});

export default CheackOut;
