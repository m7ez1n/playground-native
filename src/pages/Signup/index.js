import React, {useEffect, useState} from 'react';
import {Animated, Keyboard} from 'react-native';

import * as S from './styles';

export default function Signup({navigation}) {
  const [image] = useState(new Animated.ValueXY({x: 300, y: 220}));

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);
  });

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(image.x, {
        toValue: 250,
        duration: 100,
      }),
      Animated.timing(image.y, {
        toValue: 0,
        duration: 100,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(image.x, {
        toValue: 300,
        duration: 100,
      }),
      Animated.timing(image.y, {
        toValue: 220,
        duration: 100,
      }),
    ]).start();
  }

  return (
    <S.Wrapper>
      <S.ContainerLogo>
        <Animated.Image
          source={require('../../assets/signup.png')}
          style={{
            width: image.x,
            height: image.y,
          }}
        />
      </S.ContainerLogo>
      <S.ContainerInputs>
        <S.Input
          placeholder="Nome"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <S.Input
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <S.Input placeholder="Senha" autoCorrect={false} onChange={() => {}} />

        <S.btnSubmit>
          <S.submitText>Cadastrar</S.submitText>
        </S.btnSubmit>
        <S.btnRegister onPress={() => navigation.navigate('Signin')}>
          <S.registerText>
            Já tem uma conta?{' '}
            <S.registerDiferentText>Login</S.registerDiferentText>
          </S.registerText>
        </S.btnRegister>
      </S.ContainerInputs>
    </S.Wrapper>
  );
}
