import styled from 'styled-components/native';

export const Wrapper = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const ContainerLogo = styled.View`
  justify-content: center;
  flex: 1;
`;

export const ContainerInputs = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: -150px;
`;

export const Input = styled.TextInput`
  background-color: #e3e3e3;
  width: 90%;
  margin-bottom: 15px;
  color: #222;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px;
`;

export const btnSubmit = styled.TouchableOpacity`
  background-color: rgb(75, 59, 255);
  width: 90%;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const submitText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const btnRegister = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const registerText = styled.Text`
  color: #000;
`;
