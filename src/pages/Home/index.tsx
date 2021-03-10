import React from 'react';
import {Container,Logo,Button,ButtonText} from './styles';



const HomeScreen: React.FC  = () =>{
  return(
    <Container>
      <Logo source={{uri:'https://static1-www.millenium.gg/articles/7/18/65/7/@/188382-twitch-orig-1-article_image_t-1.jpeg'}} resizeMode="contain"/>
      <Button>
        <ButtonText> Entrar </ButtonText>
      </Button>

    </Container>
  )
}


export default HomeScreen;
