import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import Product from "./Product";
import Header from "./Header";

const MainComponent = () => {
  const products = [
    {
      name: "Samsung Mobile",
      color: "white",
      price: 30000,
      image:
        "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Apple Iphone",
      color: "black",
      price: 130000,
      image:
        "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Nokia Xperia",
      color: "grey",
      price: 40000,
      image:
        "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {products.map((item) => {
          return <Product item={item} />;
        })}
      </ScrollView>
    </View>
  );
};

export default MainComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
