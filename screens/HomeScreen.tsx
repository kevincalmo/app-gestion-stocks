import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { getAllAdmins } from '../classes/Administrator'

const HomeScreen = () => {
    /* 
    useEffect(() => {
        const admins = getAllAdmins();
        admins.then(res => console.log(res))
    }, []) */

    return (
        <View>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
        </View>
    )
}

export default HomeScreen