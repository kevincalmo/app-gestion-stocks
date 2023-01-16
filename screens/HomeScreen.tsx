import React from 'react'
import { Button, Text, View } from 'react-native'
import { DefaultScreenProps } from '../models/screen'

const HomeScreen: React.FunctionComponent<DefaultScreenProps> = ({ onSignOut }) => {
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