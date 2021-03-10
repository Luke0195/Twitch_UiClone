import styled from 'styled-components/native'

export const Container = styled.View`
 background:#030304;
 flex:1;
 flex-direction:column;
 align-items:center;
 justify-content:center;
`

export const Logo = styled.Image`
 width:300px;
 height: 100px;

`


export const Button = styled.TouchableOpacity`
 width: 250px;
 height: 60px;
 background:#6441a5;
 margin-top: 60px;
 flex-direction:row;
 align-items:center;
 justify-content:center;
border-radius: 8px;
`


export const ButtonText = styled.Text`
font-size: 20px;
font-family:'SourceSansPro-SemiBold';
color:#fff;
`
