import { Heading } from '@aws-amplify/ui-react';
import { Container, Stack } from '@chakra-ui/react';
import React from 'react'
import { UserInterface } from '../types/UserInterface'

interface AppPageProps {
    admin: UserInterface | undefined;
}

const HomePage: React.FunctionComponent<AppPageProps> = ({ admin }) => {
    return (
        <Container>
            <Stack>
                <Heading
                    as='h1'
                    textAlign='center'
                    fontSize='2xl'
                    color='blue'
                    textDecoration='underlines'
                >Accueil</Heading>
            </Stack>
        </Container>
    )
}

export default HomePage