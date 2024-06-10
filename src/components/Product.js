import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action";
import { useSelector } from "react-redux";

const Product = (props) => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    if (cartItems && cartItems.length) {
      cartItems.forEach((element) => {
        if (element.name === item.name) {
          setIsAdded(true);
        }
      });
    }
  }, [cartItems]);
  return (
    <View
      style={{
        alignItems: "center",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 2,
        padding: 10,
      }}
    >
      <Text style={{ color: "black", fontSize: 20 }}>{item.name}</Text>
      <Text style={{ color: "black", fontSize: 20 }}>{item.price}</Text>
      <Text style={{ color: "black", fontSize: 20 }}>{item.color}</Text>
      <Image
        source={{ uri: item.image }}
        style={{ width: 200, height: 200, marginBottom: 10 }}
      />
      {isAdded ? (
        <Button title="Remove to cart" />
      ) : (
        <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
