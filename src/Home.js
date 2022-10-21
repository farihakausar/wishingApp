import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  const [name, setName] = React.useState('');
  return (
    <View style={styles.container}>
     <Text>Enter the name</Text>
     <TextInput
          style={styles.inputStyle}
          autoCapitalize="false"
          autoCorrect={false}
          value={name}
        // onChangeText={setPostText}
          onChangeText={(text)=>{
            setName(text)}}
          placeholder="Enter your name"
        ></TextInput>
     <TouchableOpacity      style={styles.btn} onPress={()=>{
     navigation.navigate("Wish",{
     
      name:name
    
    })
  }}>
      <Text>create birthday card</Text>
      </TouchableOpacity>
      <TouchableOpacity      style={styles.btn} onPress={()=>{
     navigation.navigate("Eid",{
     
      name:name
    
    })
  }}>
      <Text>create Eid card</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: "black",
    borderWidth: 3,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 2,

    padding: 10,
    marginVertical: 10,
  },
  container: {
    display: "flex",
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  btn:{
    borderColor: "white",
    backgroundColor: "blue",
    color: "white",
    textAlign: "center",
    borderRadius: 6,
    padding: 10,
    marginVertical: 10
  }
})