import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          backgroundColor: "lightblue",
          padding: 10,
          textAlign: "right",
        }}
      >
        0
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
