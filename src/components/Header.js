import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [cartItems, setCartItems] = useState(0);
  const cartData = useSelector((state) => state.reducer);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>{cartItems}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 20,
    width: "100%",
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    shadowColor: "black",
    elevation: 2,
    borderColor: "black",
  },

  container: {
    width: 40,
    backgroundColor: "lightgrey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
    marginTop: 20,
    borderRadius: 15,
    shadowColor: "black",
    elevation: 5,
    shadowOffset: { width: 5, height: 10 },
  },

  text: { fontSize: 20, color: "white" },
});
