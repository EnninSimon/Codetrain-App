import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import office from '../../assets/office.jpg';
import { connect } from 'react-redux';
import {loginEmailAccount} from '../redux/actions/authActions';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    handleUpdateState = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = () => {
        this.props.loginEmailAccount(this.state.email, this.state.password)
    }
    render() {
        const { auth, navigation } = this.props
        return (
            <ScrollView>
                <Image source={office} style={styles.backGround} />
                <View style={styles.TextInputContainer}>
                {
                    auth.error.login &&
                    <Text style={{ color: 'red' }}>{auth.error.login}</Text>
                }
                    <View style={styles.signInInfo}>
                        <Text>Email       </Text>
                        <TextInput style={styles.myTextInput}
                        value={this.state.email}
                        onChangeText={(text) => {
                            this.handleUpdateState('email', text)
                        }} 
                        placeholder="Email" textAlign="right" />
                    </View>
                    <Text style={styles.horizontalBar}></Text>
                    <View style={styles.signInInfo}>
                        <Text>Password</Text>
                        <TextInput style={styles.myTextInput}
                        value={this.state.password}
                        onChangeText={(text) => {
                            this.handleUpdateState('password', text)
                        }}
                         placeholder="Password" secureTextEntry={true} textAlign="right" />
                    </View>
                </View>
                <View style={styles.SignInContainer}>
                    <TouchableOpacity style={styles.SignInButton} onPress={this.handleOnSubmit}>
                        <Text style={styles.SignInText}>SIGN IN</Text>
                    </TouchableOpacity></View>
                <View style={styles.forgotPasswordContainer}>
                    <Text style={styles.mainText}>Forgot?</Text>
                    <TouchableOpacity>
                        <Text style={styles.mainText}>Reset Password</Text>
                        <Text style={styles.horizontalBar2}></Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    backGround: {
        width: 360,
        height: 240,
    },
    myTextInput: {
        height: 30,
        width: 270
    }, horizontalBar: {
        height: 1,
        width: 320,
        backgroundColor: '#7e7e7e',
        marginVertical: 10,
        marginHorizontal: 15
    },
    TextInputContainer: {
        marginTop: 40
    },
    SignInContainer: {
        marginTop: 155,
    },
    SignInButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff3333',
        borderRadius: 25,
        marginHorizontal: 95,
        height: 45,
        marginBottom:-5

    },
    SignInText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    signInInfo: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 7,
        marginHorizontal: 10
    },
    forgotPasswordContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    horizontalBar2: {
        height: 3,
        width: 126,
        backgroundColor: '#ff1a1a',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        marginLeft: 54
    },
    mainText: {
        marginHorizontal: 60,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#7a7a7a',
        marginBottom: 2
    }
})


const mapStateToProp = (state) => {
    return { auth: state }
}

export default connect(mapStateToProp, {loginEmailAccount})(SignIn);
