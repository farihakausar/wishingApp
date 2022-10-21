import { StyleSheet, Text, View,ImageBackground } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";


const Eid = () => {
  const route = useRoute();
  return (
    <ImageBackground source={require("../assets/eid.jpg")}  resizeMode="cover" >
    <View style={[styles.wish,styles.wishBir]}>
       

      <Text >Wishing {route.params.name} a very </Text>
      <Text style={{color:"purple"}}>Happy Eid!</Text> 
      <Text >May the magic of Eid bring lots of happiness and fill your life with different colours.</Text>
     
    </View>
    </ImageBackground>
  );
};

export default Eid;

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
  
    justifyContent: "center"
  },
  wishBir: {
    fontSize: 20,
    margin: 100,
    padding: 10,
    
  },
});
