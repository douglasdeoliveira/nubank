import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/styles/colors';

import {
  Code,
  Container,
  Nav,
  NavItems,
  NavText,
  SingOutButton,
  SingOutButtonText,
} from './styles';

export default function Menu({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <QRCode
          value="https://rocketseat.com.br"
          size={80}
          color="#fff"
          backgroundColor={colors.primary}
        />
      </Code>
      <Nav>
        <NavItems>
          <Icon name="help-outline" size={20} color="#fff" />
          <NavText>Me ajuda</NavText>
        </NavItems>
        <NavItems>
          <Icon name="person-outline" size={20} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItems>
        <NavItems>
          <Icon name="credit-card" size={20} color="#fff" />
          <NavText>Configurar cartão</NavText>
        </NavItems>
        <NavItems>
          <Icon name="smartphone" size={20} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItems>
      </Nav>
      <SingOutButton onPress={() => {}}>
        <SingOutButtonText>SAIR DO APP</SingOutButtonText>
      </SingOutButton>
    </Container>
  );
}
