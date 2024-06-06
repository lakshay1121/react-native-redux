import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import {useDispatch} from 'react-redux'
import { addToCart } from "../redux/action";

const Product = (props) => {
  const item = props.item;
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {

    // console.warn("called", item);
    dispatch(addToCart(item));
  }
  return (
    <View
      style={{
        alignItems: "center",
        borderBottomColor: "orange",
        borderBottomWidth: 2,
        padding: 10,
      }}
    >
      <Text style={{ color: "black", fontSize: 20 }}>{item.name}</Text>
      <Text style={{ color: "black", fontSize: 20 }}>{item.price}</Text>
      <Text style={{ color: "black", fontSize: 20 }}>{item.color}</Text>
      <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />
      <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
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
