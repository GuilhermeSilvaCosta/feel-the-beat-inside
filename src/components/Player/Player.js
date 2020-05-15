import React, { useEffect, useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Audio } from 'expo-av';
import {
    Container, AlbumImage, TrackInfo, TrackActions, TrackTitle, Artist,
} from './styles';
import { nextTrack, previousTrack } from '~/store/modules/player/actions';

const soundObject = new Audio.Sound();

function Player() {
    const { track } = useSelector(state => state.player);
    const dispatch = useDispatch();

    const [playing, setPlaying] = useState(false);
    const [maximize, setMaximize] = useState(false);

    useEffect(() => {
        async function preview() {
            try {
                await soundObject.unloadAsync();
                await soundObject.loadAsync({ uri: track.preview_url });
                await soundObject.playAsync();
                soundObject.setOnPlaybackStatusUpdate(playbackStatus => {
                    if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
                        dispatch(nextTrack());
                    }
                });
                setPlaying(true);
            } catch (error) {
                Alert.alert('Erro', error.message);
            }
        }

        if (track) preview();
    }, [track, dispatch]);

    async function pause() {
        await soundObject.pauseAsync();
        setPlaying(false);
    }

    async function play() {
        await soundObject.playAsync();
        setPlaying(true);
    }

    function maximizeMinize() {
        setMaximize(!maximize);
    }

    return (
        <Container maximize={maximize} onPress={maximizeMinize}>
            {!!track
            && (
                <AlbumImage
                    maximize={maximize}
                    source={{
                        uri: track.album.images[0].url,
                    }}
                />
            )}
            <TrackInfo maximize={maximize}>
                {!track && <TrackTitle>Selecione uma musica!</TrackTitle>}
                {!!track && <TrackTitle>{track.name}</TrackTitle>}
                {!!track && <Artist>{track.artists[0].name}</Artist>}
            </TrackInfo>
            <TrackActions maximize={maximize}>
                {!maximize && <AntDesign name="hearto" size={24} color="white" />}
                {!!maximize
                    && (
                        <TouchableOpacity onPress={() => dispatch(previousTrack())}>
                            <AntDesign name="stepbackward" size={24} color="white" />
                        </TouchableOpacity>
                    )}
                {!playing
                && (
                    <TouchableOpacity onPress={play}>
                        <AntDesign name="caretright" size={24} color="white" />
                    </TouchableOpacity>
                )}
                {!!playing
                && (
                    <TouchableOpacity onPress={pause}>
                        <AntDesign name="pause" size={24} color="white" />
                    </TouchableOpacity>
                )}
                {!!maximize
                    && (
                        <TouchableOpacity onPress={() => dispatch(nextTrack())}>
                            <AntDesign name="stepforward" size={24} color="white" />
                        </TouchableOpacity>
                    )}
            </TrackActions>
        </Container>
    );
}

export default Player;
