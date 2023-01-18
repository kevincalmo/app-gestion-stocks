import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';
// @ts-ignore
import { Authenticator, SignIn, SignUp } from 'aws-amplify-react-native'
import HomeScreen from './screens/HomeScreen';
import { DefaultScreenProps } from './types/screen';
Amplify.configure(awsconfig);

const App = () => {

  return (
    <Authenticator>
      <HomeScreen />
    </Authenticator>
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

export default App
