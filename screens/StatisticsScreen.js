import React from 'react';
import TopBarNavigator from '../components/TopBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Statistics = () =>{
    return (
      <SafeAreaProvider>
        <TopBarNavigator />
      </SafeAreaProvider>

    );
  }
  export default Statistics;