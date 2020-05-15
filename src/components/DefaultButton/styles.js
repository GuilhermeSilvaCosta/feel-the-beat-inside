import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    height: 46px;
    background: #3b9eff;
    border-radius: 25px;
    justify-content: center;
`;

export const Text = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
`;
