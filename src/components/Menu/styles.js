import { Animated, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  overflow: hidden;
  margin: 0 30px;
`;

export const Code = styled.View`
  background: #fff;
  padding: 8px;
  align-self: center;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItems = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 15px;
`;

export const SingOutButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
  border-radius: 4px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
`;
export const SingOutButtonText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
`;
