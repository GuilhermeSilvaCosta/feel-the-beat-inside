import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import Background from '~/components/Background';
import api from '~/services/api';
import Track from './Track';
import { changePlaylist, setTrack } from '~/store/modules/player/actions';

import {
    Container, PlaylistTitle, AlbumImage, List, PlayButton,
} from './styles';

function CurrentyPlaylist({ route }) {
    const dispatch = useDispatch();
    const { playlist } = route.params;

    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        async function loadPlaylist() {
            try {
                const response = await api.get(`/playlists/${playlist.id}/tracks`);
                setTracks(response.data.items);
            } catch (e) {
                Alert.alert('Erro', e.message);
            }
        }
        loadPlaylist();
    }, [playlist.id]);

    function play() {
        dispatch(changePlaylist(tracks));
        dispatch(setTrack(tracks[0].track));
    }

    function setThisPlaylist() {
        dispatch(changePlaylist(tracks));
    }

    return (
        <Background>
            <Container>
                <AlbumImage source={{
                    uri: playlist.images[0].url,
                }}
                />
                <PlaylistTitle>{playlist.name}</PlaylistTitle>
                <PlayButton onPress={play}>PLAY</PlayButton>
                <List
                    data={tracks}
                    renderItem={
                        ({ item }) => <Track track={item.track} onSelected={setThisPlaylist} />
                    }
                    keyExtractor={item => item.track.id}
                />
            </Container>
        </Background>
    );
}

export default CurrentyPlaylist;
