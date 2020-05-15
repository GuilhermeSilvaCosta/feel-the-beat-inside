export function changePlaylist(playlist) {
    return {
        type: '@playlist/CHANGE_PLAYLIST',
        payload: { playlist },
    };
}

export function setTrack(track) {
    return {
        type: '@playlist/SET_TRACK',
        payload: { track },
    };
}

export function nextTrack() {
    return {
        type: '@playlist/NEXT_TRACK',
    };
}

export function previousTrack() {
    return {
        type: '@playlist/PREVIOUS_TRACK',
    };
}
