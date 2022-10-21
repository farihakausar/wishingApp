import { StyleSheet,ImageBackground, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";


const Wish = () => {
  const route = useRoute();
  return (
    
    <ImageBackground source={require("../assets/wish.jpg")} resizeMode="cover" >
    <View style={[styles.wish,styles.wishBir]}>
     
      <Text >Wish {route.params.name} a very </Text>
      <Text style={{color:"purple"}}>HAPPY BIRTHDAY</Text> 
      <Text >ENJOY YOUR DAY AND STAY BLESSED</Text>
      
    </View>
    </ImageBackground>
  );
};

export default Wish;

const styles = StyleSheet.create({
  wish: {
    backgroundColor: "purple",
    backgroundColor: "pink",
    borderRadius:5,
    borderWidth:7,
    borderTopColor:"blue",
    borderEndColor:"green",
    borderRightColor:"yellow",
    borderLeftColor:"black"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  wishBir: {
    fontSize: 20,
    margin: 100,
    padding: 10,
    
  },
});

