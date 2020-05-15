import React, { useEffect, useState } from 'react';
import Playlists from '~/components/Playlists';

import api from '~/services/api';

function RecommendationsPlaylist() {
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        async function loadPlaylist() {
            const response = await api.get('/recommendations', {
                params: {
                    market: 'BR',
                    seed_genres: 'rock,sertanejo,black',
                    limit: 10,
                },
            });
            const { albums } = response.data;

            setPlaylist(albums.items);
        }
        loadPlaylist();
    }, []);

    return (
        playlist.length > 0 && <Playlists playlists={playlist} title="Lançamentos" />
    );
}

export default RecommendationsPlaylist;
