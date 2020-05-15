import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0px;
    margin-left: 10px;
`;

export const List = styled.FlatList.attrs({
    horizontal: true,
})`
`;

export const Album = styled.TouchableOpacity`
    margin-left: 10px;
`;

export const AlbumImage = styled.Image`
    width: 170px;
    height: 170px;
`;

export const AlbumTitle = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    margin-top: 3px;
    max-width: 150px;
`;
