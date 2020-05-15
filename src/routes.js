import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/pages/Home';
import CurrentyPlaylist from '~/pages/CurrentyPlaylist';

const AppStack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="CurrentyPlaylist" component={CurrentyPlaylist} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
