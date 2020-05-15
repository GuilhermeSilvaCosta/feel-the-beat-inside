import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    position: absolute;
    bottom: 0px;
    background-color: #262626;
    width: 100%;
    height: ${props => (props.maximize ? '100%' : '80px')};
    justify-content: center;
    flex-direction: ${props => (props.maximize ? 'column' : 'row')};
    align-items: center;
    justify-content: flex-start;
`;

export const AlbumImage = styled.Image`
    width: ${props => (props.maximize ? '80%' : '80px')};;
    height: ${props => (props.maximize ? '80%' : '80px')};
    max-height: ${props => (props.maximize ? '80%' : '100%')};
    margin-right: 5px;
    flex: ${props => (props.maximize ? '1' : 'none')};
    margin-top: ${props => (props.maximize ? '60px' : '0px')};
`;

export const TrackInfo = styled.View`
    flex: ${props => (props.maximize ? 'none' : '1')};;
`;

export const TrackActions = styled.View`
    flex-direction: row;
    min-width: 100px;
    justify-content: ${props => (props.maximize ? 'space-between' : 'space-around')};
    padding: 10px 0px;
`;

export const TrackTitle = styled.Text`
    color: #fff;
    font-weight: bold;
`;

export const Artist = styled.Text`
    color: gray;
`;
