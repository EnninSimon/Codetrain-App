import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CodeTrainContacts from './CodeTrainContacts';


const Stack = createStackNavigator();

export default function App() {
  return (
    <CodeTrainContacts />
  );
}
