import React, { useEffect, useState } from 'react';
import Playlists from '~/components/Playlists';

import api from '~/services/api';

function FeaturedPlaylist({ navigation }) {
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        async function loadPlaylist() {
            const response = await api.get('/browse/featured-playlists', {
                params: {
                    country: 'BR',
                },
            });
            const { playlists } = response.data;

            setPlaylist(playlists.items);
        }
        loadPlaylist();
    }, []);

    return (
        playlist.length > 0 && <Playlists playlists={playlist} title="Playlists em Destaque" navigation={navigation} />
    );
}

export default FeaturedPlaylist;
