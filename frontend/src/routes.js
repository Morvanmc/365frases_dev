import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './pages/Main';
import NewPhrase from './pages/NewPhrase';

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Main}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="NewPhrase"
                        component={NewPhrase}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default Routes;