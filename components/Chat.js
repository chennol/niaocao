// @flow
import React from 'react';

import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { GiftedChat,Actions, Bubble, SystemMessage } from 'react-native-gifted-chat'; // Version can be specified in package.json

import Fire from '../Fire';
import { KeyboardAvoidingView } from 'react-native';


type Props = {
    name?: string,
};

class Chat extends React.Component<Props> {

    static navigationOptions = ({ navigation }) => ({
        title: (navigation.state.params || {}).name || 'Chat!',
    });

    state = {
        messages: [],

    };

    get user() {
        return {
            name: this.props.navigation.state.params.name,
            _id: Fire.shared.uid,
        };
    }


    render() {
        return (
            <View style ={{flex:1}}>
            <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
        keyboardShouldPersistTaps={'never'}
        />

        <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={80}/>
        </View>

    );
    }

    componentDidMount() {
        Fire.shared.on(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))
        );
    }
    componentWillUnmount() {
        Fire.shared.off();
    }
}

export default Chat;
