import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import CodeTrainContacts from './CodeTrainContacts';
import { Provider } from 'react-redux';
import { store, persistor } from './components/redux/store';
import { PersistGate } from 'redux-persist/integration/react';



const Stack = createStackNavigator();

export default function App() {

  const activity = <View style={styles.container}>
    <ActivityIndicator size="large" color="red" />
  </View>;
  
  return (
    <Provider store={store}>
      <PersistGate loading={activity} persistor={persistor}>
        <CodeTrainContacts />
      </PersistGate>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})