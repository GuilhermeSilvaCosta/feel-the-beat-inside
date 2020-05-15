import produce from 'immer';

const INITIAL_STATE = {
    playlist: [],
    track: null,
};

export default function playlist(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
        case '@playlist/CHANGE_PLAYLIST': {
            draft.playlist = action.payload.playlist;
            break;
        }
        case '@playlist/SET_TRACK': {
            draft.track = action.payload.track;
            break;
        }
        case '@playlist/PREVIOUS_TRACK': {
            if (draft.playlist && draft.playlist.length > 0) {
                const index = draft.playlist.reduce(
                    (acum, el, idx) => (
                        // eslint-disable-next-line no-nested-ternary
                        el.track.preview_url === draft.track.preview_url
                            ? idx
                            // eslint-disable-next-line no-restricted-globals
                            : isNaN(acum) ? 0 : acum
                    ),
                ) - 1;
                if (index >= 0) {
                    const { track } = draft.playlist[index];
                    draft.track = track || null;
                }
            }
            break;
        }
        case '@playlist/NEXT_TRACK': {
            if (draft.playlist && draft.playlist.length > 0) {
                const index = draft.playlist.reduce(
                    (acum, el, idx) => (
                        // eslint-disable-next-line no-nested-ternary
                        el.track.preview_url === draft.track.preview_url
                            ? idx
                            // eslint-disable-next-line no-restricted-globals
                            : isNaN(acum) ? 0 : acum
                    ),
                ) + 1;
                const { track } = draft.playlist[index];
                draft.track = track || null;
            }
            break;
        }
        default:
        }
    });
}
