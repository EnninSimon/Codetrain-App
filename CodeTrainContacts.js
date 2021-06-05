import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './components/Screens/SignIn';
import Welcome from './components/Screens/Welcome';
import KeepInTouch from './components/Screens/KeepInTouch';
import Register from './components/Screens/Register';
import RegisterEdit from './components/Screens/RegisterEdit';
import Home from './components/Screens/Home';
import MemberProfile from './components/Screens/MemberProfile';
import MyProfile from './components/Screens/MyProfile';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Stack = createStackNavigator();

export default function CodeTrainContacts() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', }}>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false, }} />
        <Stack.Screen name="MemberProfile" component={MemberProfile} options={{ title: "Member Profile" }} />
        <Stack.Screen name="Home" component={Home} options={({navigation})=>(
          {
            title: "CodeTrain", headerTitleStyle: {
              color: "white"
            }, headerStyle: {
              backgroundColor: "red"
            }, headerRight: () =>
              <TouchableOpacity onPress={() => navigation.navigate("MemberProfile")}>
                <Text style={{ marginRight: 15 }}>
                  <FontAwesome5 name="user" size={24} color="white" />
                </Text>
              </TouchableOpacity>
          }
        )} />

        <Stack.Screen name="MyProfile" component={MyProfile} options={{ title: "My Profile" }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ title: "Sign In" }} />
        <Stack.Screen name="Register" component={Register} options={{ title: "Register", headerStyle: { backgroundColor: 'red' } }} />
        <Stack.Screen name="RegisterEdit" component={RegisterEdit} options={{ title: "Register", headerStyle: { backgroundColor: 'red' } }} />
        <Stack.Screen name="KeepInTouch" component={KeepInTouch} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1fbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});