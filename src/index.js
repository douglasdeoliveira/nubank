import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import './config/ReactotronConfig';
import Routes from './routes';
import colors from './styles/colors';

Icon.loadFont();

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
    <Routes />
  </>
);

export default App;
