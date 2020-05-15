import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducer = persistReducer({
        key: 'feel-the-beat-inside',
        storage: AsyncStorage,
        whitelist: ['player'],
    }, reducers);

    return persistedReducer;
};
