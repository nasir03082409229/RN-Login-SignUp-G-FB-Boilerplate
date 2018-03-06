import React, { Component } from 'react';
import {
    Container, Header, Content, Card, CardItem, Text, Body,
    Item, Input, Icon , Button
} from 'native-base';
export default class Login extends Component {
    render() {
        return (
            <Container>
                {/* <Header /> */}
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>Access Your Account</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Item>
                                    <Icon active name='home' />
                                    <Input placeholder='Icon Textbox' />
                                </Item>
                                <Item>
                                    <Icon active name='home' />
                                    <Input placeholder='Icon Textbox' />
                                </Item>
                                <Button iconLeft light>
                                    <Icon name='arrow-back' />
                                    <Text>Login</Text>
                                </Button>
                            </Body>
                        </CardItem>

                    </Card>
                </Content>
            </Container>
        );
    }
}