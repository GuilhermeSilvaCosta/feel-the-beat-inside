import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
    showsVerticalsIndicator: false,
    contentContainerStyle: { paddingTop: 30, paddingBottom: 130 },
})`
    align-self: stretch;
`;
