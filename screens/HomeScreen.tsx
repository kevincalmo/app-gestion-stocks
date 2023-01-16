import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { getAllAdmins } from '../classes/Administrator'
import { DefaultScreenProps } from '../types/screen'

const HomeScreen: React.FunctionComponent<DefaultScreenProps> = ({ onSignOut, user }) => {
    useEffect(() => {
        const admins = getAllAdmins();
        admins.then(res => console.log(res))
    }, [])


    return (
        <View>
            <Text>Hello World</Text>
            <Button
                title='Deconnexion'
                onPress={onSignOut}
            />
        </View>
    )
}

export default HomeScreen