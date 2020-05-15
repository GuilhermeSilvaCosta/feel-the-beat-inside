import React from 'react';
import {
    Container, Title, AlbumTitle, AlbumImage, List, Album,
} from './styles';

function Playlists({ title, playlists, navigation }) {
    return (
        <Container>
            <Title>{title}</Title>
            <List
                data={playlists}
                renderItem={({ item }) => (
                    <Album
                        onPress={() => {
                            navigation.navigate('CurrentyPlaylist', { playlist: item });
                        }}
                    >
                        <AlbumImage source={{
                            uri: item.images[0].url,
                        }}
                        />
                        <AlbumTitle>{item.name}</AlbumTitle>
                    </Album>
                )}
                keyExtractor={item => item.id}
            />
        </Container>
    );
}

export default Playlists;
