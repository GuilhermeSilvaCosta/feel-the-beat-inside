import styled from 'styled-components/native';

import DefaultButton from '~/components/DefaultButton';

export const Container = styled.View`
  padding-top: 40px;
`;

export const PlaylistTitle = styled.Text`
    color: #fff;
    align-self: center;
    font-size: 24px;
    font-weight: bold;
`;

export const AlbumImage = styled.Image`
    width: 170px;
    height: 170px;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: { padding: 15, paddingBottom: 400 },
})`
`;

export const PlayButton = styled(DefaultButton)`
    color: #fff;
    background-color: #33cc00;
    margin: 10px;
    align-self: center;
    min-width: 130px;
`;
