
import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';



export default class LoginFooter extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Login</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Sign Up Here !</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}