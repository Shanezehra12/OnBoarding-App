import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";

const Home = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />

      <SafeAreaView>
        <Text className="text-center top-10">Home</Text>

      </SafeAreaView>
    </>
  );
};

export default Home;
