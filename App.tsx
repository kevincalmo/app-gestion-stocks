import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Amplify, I18n} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import HomeScreen from './screens/HomeScreen';
import { DefaultScreenProps } from './types/screen';
import { Button } from 'react-native';
Amplify.configure(awsconfig);

import { translations } from '@aws-amplify/ui';
I18n.putVocabularies(translations);
I18n.setLanguage('fr');

I18n.putVocabularies({
  fr: {
    'Sign In': 'Se connecter',
    'Sign Up': "S'inscrire",
    'Forgot Password?': "Mot de passe oublié ?",
    'Enter your Username':"Entrer votre nom d'utilisateur",
    'Enter your Password':"Entrer votre mot de passe",
    'Reset Password' : 'Reinitialiser votre mot de passe'
  },
});


function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

const App = () => {

  return (
    <Authenticator.Provider>
      <Authenticator
        components={{
          SignIn: (props) => (
            <Authenticator.SignIn {...props} hideSignUp />
          ),
        }}
      >
        <View style={styles.container}>
          <HomeScreen />
          <SignOutButton />
        </View>

      </Authenticator>
    </Authenticator.Provider>
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
