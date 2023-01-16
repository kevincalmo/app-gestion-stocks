import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';

import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import HomeScreen from './screens/HomeScreen';
Amplify.configure(awsconfig);

const App = () => {
  return (
    <><View style={styles.container}>
      <Authenticator
        hideSignUp={true}
      >
        {({ signOut, user }) => (
          <>
            <HomeScreen user={user} onSignOut={signOut} />
            <StatusBar style="auto" />
          </>
        )}
      </Authenticator>
    </View>
    </>
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
