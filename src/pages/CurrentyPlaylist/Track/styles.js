import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    padding: 10px 0px;
    position: relative;
`;

export const TrackName = styled.Text`
    color: ${props => (props.selected ? '#4d88ff' : '#fff')};
    font-weight: bold;
    font-size: 14px;
`;

export const Duration = styled.Text`
    color: ${props => (props.selected ? '#4d88ff' : '#fff')};;
    font-size: 14px;
    position: absolute;
    right: 0px;
    top: 18px;
`;

export const SubtitleTrack = styled.Text`
    color: #d9d9d9;
    font-size: 11px;
`;
