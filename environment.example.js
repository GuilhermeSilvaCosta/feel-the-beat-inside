import Constants from 'expo-constants';

const ENV = {
    dev: {
        spotifyKey: 'YOUT_KEY',
    },
    staging: {
        spotifyKey: 'YOUR_KEY',
        // Add other keys you want here
    },
    prod: {
        spotifyKey: 'YOUR_KEY',
        // Add other keys you want here
    },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
    if (env === 'staging') {
        return ENV.staging;
    } if (env === 'prod') {
        return ENV.prod;
    }
    return ENV.dev;
};

export default getEnvVars;
