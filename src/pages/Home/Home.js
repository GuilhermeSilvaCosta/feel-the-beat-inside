import React from 'react';
import Background from '~/components/Background';
import FeaturedPlaylist from '~/components/FeaturedPlaylist';
import GenderPlaylist from '~/components/GenderPlaylist';

import { Container } from './styles';


function Home({ navigation }) {
    return (
        <Background>
            <Container>
                <FeaturedPlaylist navigation={navigation} />
                <GenderPlaylist gender="hiphop" title="Hip Hop" navigation={navigation} />
                <GenderPlaylist gender="rock" title="Rock" navigation={navigation} />
                <GenderPlaylist gender="sertanejo" title="Sertanejo" navigation={navigation} />
            </Container>
        </Background>
    );
}

export default Home;
