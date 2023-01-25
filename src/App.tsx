import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Amplify, Auth, DataStore } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import { Text } from '@chakra-ui/react';
import { Administrator } from './models';
import { UserInterface } from './types/UserInterface';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
Amplify.configure(awsExports);

interface Home {
  user: any,
  signOut: Function
}

const App: React.FunctionComponent = () => {
  const [user, setUser] = useState<UserInterface>();
  useEffect(() => {
    async function getUser() {
      /* Je récupère l'utilisateur authentifier */
      const userAuthInfo = await Auth.currentAuthenticatedUser();
      /* Je récupère la liste des utilisateur en base de donné */
      const usersDB = await DataStore.query(Administrator)
      /* Je vérifie si l'utilisateur authentifié est en base de donnée  */
      const userCheck: any[] = usersDB.filter(u => u.user_auth_id === userAuthInfo.attributes.sub && u.username !== undefined)
      console.log(userCheck);

      if (userCheck.length > 0) {
        console.log('in db');

        setUser({
          "username": userCheck[0].username,
          "stockID": userCheck[0].stockID,
          "user_auth_id": userCheck[0].user_auth_id
        });
      } else {
        console.log('create');

        /* Mon utilisateur n'est pas encore danss la base de donnée */
        const new_user = await DataStore.save(
          new Administrator({
            "username": userAuthInfo.username,
            "user_auth_id": userAuthInfo.attributes.sub,
            "Enterprise": "fiser"
          })
        );
        setUser({
          "username": userAuthInfo.username,
          "user_auth_id": userCheck[0].user_auth_id
        });
      }
    }
    getUser()
  }, [])
  return (
    <Layout>
      <HomePage admin={user} />
    </Layout>
  );
}

export default withAuthenticator(App);
