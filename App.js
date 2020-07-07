import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import axios from 'axios';
import querystring from 'querystring';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Player from './src/components/Player';
import getEnvVars from './environment';

import api from '~/services/api';
import Routes from '~/routes';
import { store, persistor } from '~/store';

export default function App() {
    const [hasToken, setHasToken] = useState(false);

    const { spotifyKey } = getEnvVars();

    useEffect(() => {
        async function getToken() {
            const response = await axios({
                method: 'post',
                url: 'https://accounts.spotify.com/api/token',
                data: querystring.stringify({
                    grant_type: 'client_credentials',
                }),
                headers: {
                    Authorization: `Basic ${spotifyKey}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            const { token_type, access_token } = response.data;
            api.defaults.headers.Authorization = `${token_type} ${access_token}`;
            setHasToken(true);
        }
        getToken();
    }, [spotifyKey]);

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <StatusBar barStyle="light-content" backgroundColor="#262626" />
                {!!hasToken && <Routes />}
                <Player />
            </PersistGate>
        </Provider>
    );
}
