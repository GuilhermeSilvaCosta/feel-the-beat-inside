import React, { useEffect, useState } from 'react';
import Playlists from '~/components/Playlists';

import api from '~/services/api';

function GenderPlaylist({ navigation, gender, title }) {
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        async function loadPlaylist() {
            const response = await api.get(`/browse/categories/${gender}/playlists`, {
                params: {
                    country: 'BR',
                    limit: 10,
                },
            });
            const { playlists } = response.data;

            setPlaylist(playlists.items);
        }
        loadPlaylist();
    }, [gender]);

    return (
        playlist.length > 0
        && <Playlists playlists={playlist} title={title} navigation={navigation} />
    );
}

export default GenderPlaylist;
