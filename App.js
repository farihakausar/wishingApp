
import { StyleSheet,  View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/Home"
import Wish from "./src/Wish"
import Eid from "./src/Eid"


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" options={{headerShown:false,headerTitleAlign:"center"}}component={Home} />
    <Stack.Screen name="Wish" options={{headerTitleAlign:"center"}}component={Wish} />
    <Stack.Screen name="Eid" options={{headerTitleAlign:"center"}}component={Eid} />
    </Stack.Navigator>
  </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
