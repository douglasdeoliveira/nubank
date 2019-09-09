import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/Nubank_Logo.png';

import { Container, Logo, Title, Top } from './styles';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Douglas</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
}
