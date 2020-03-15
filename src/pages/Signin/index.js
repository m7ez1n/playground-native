import React, {useEffect, useState} from 'react';

import {Animated, Keyboard} from 'react-native';

import * as S from './styles';

const Signin = ({navigation}) => {
  const [logo] = useState(new Animated.ValueXY({x: 300, y: 200}));

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);
  });

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 250,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 150,
        duration: 100,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 300,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 200,
        duration: 100,
      }),
    ]).start();
  }

  return (
    <S.Wrapper>
      <S.ContainerLogo>
        <Animated.Image
          source={require('../../assets/signin.png')}
          style={{
            width: logo.x,
            height: logo.y,
          }}
        />
      </S.ContainerLogo>
      <S.ContainerInputs>
        <S.Input
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <S.Input placeholder="Senha" autoCorrect={false} onChange={() => {}} />

        <S.btnSubmit>
          <S.submitText>Entrar</S.submitText>
        </S.btnSubmit>
        <S.btnRegister onPress={() => navigation.navigate('Signup')}>
          <S.registerText>Criar uma conta gratuita</S.registerText>
        </S.btnRegister>
      </S.ContainerInputs>
    </S.Wrapper>
  );
};

export default Signin;
