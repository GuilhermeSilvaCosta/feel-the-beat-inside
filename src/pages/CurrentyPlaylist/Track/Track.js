import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from '~/@lodash';
import { setTrack } from '~/store/modules/player/actions';
import {
    Container, TrackName, SubtitleTrack, Duration,
} from './styles';

function Track({ track, onSelected }) {
    const { track: currentTrack } = useSelector(state => state.player);
    const dispatch = useDispatch();

    const duration = useMemo(() => {
        const min = (`0${((track.duration_ms / 1000) / 60).toFixed(0)}`).slice(-2);
        const sec = (`0${((track.duration_ms / 1000) % 60).toFixed(0)}`).slice(-2);
        return `${min}:${sec}`;
    }, [track.duration_ms]);

    const selected = useMemo(
        () => currentTrack && _.isEqual(currentTrack, track),
        [currentTrack, track],
    );

    function play() {
        dispatch(setTrack(track));
        onSelected();
    }

    return (
        <Container onPress={play}>
            <TrackName selected={selected}>{track.name}</TrackName>
            <SubtitleTrack>{track.artists[0].name}</SubtitleTrack>
            <Duration selected={selected}>{duration}</Duration>
        </Container>
    );
}

export default Track;
