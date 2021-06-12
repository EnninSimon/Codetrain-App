import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Alert, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import profilePicture from '../../assets/profilePicture.jpg';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { createEmailAccount, registerError } from '../redux/actions/authActions';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirm: ""
        }
    }

    handleUpdateState = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = () => {
        if (this.state.password !== this.state.confirm) {
            this.props.registerError(Alert.alert("Passwords do not match!"))
            return;
        }
        this.props.createEmailAccount(this.state.email, this.state.password)
    }
    render() {
        const { auth, navigation } = this.props
        return (
            <ScrollView>
                <Image style={styles.profilePictureBackground} source={profilePicture} />
                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                        <AntDesign name="adduser" style={styles.icon} size={70} color="black" />
                        <Text style={styles.profilePicText}>ADD PROFILE PHOTO</Text>
                    </TouchableOpacity>
                </View>
                {
                    auth.error.register &&
                    <Text style={{ color: 'red' }}>{auth.error.register}</Text>
                }

                <View style={styles.inputContainer}>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.textName}>Full Name</Text>
                        <TextInput style={styles.mainTextInput} autoCapitalize="words" placeholder="Maxwell Darko" textAlign="right" />
                    </View>
                    <Text style={styles.horizontaBar}></Text>
                </View>
                <View style={styles.inputContainer2}>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.textName}>Email        </Text>
                        <TextInput
                            style={styles.mainTextInput}
                            value={this.state.email}
                            onChangeText={(text) => {
                                this.handleUpdateState('email', text)
                            }}
                            placeholder="mDarko@email.com" textAlign="right" />
                    </View>
                    <Text style={styles.horizontaBar}></Text>
                </View>
                <View style={styles.inputContainer2}>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.textName}>Password</Text>
                        <TextInput
                            style={styles.mainTextInput}
                            value={this.state.password}
                            onChangeText={(text) => {
                                this.handleUpdateState('password', text)
                            }}
                            secureTextEntry={true}
                            placeholder="Password" textAlign="right" />
                    </View>
                    <Text style={styles.horizontaBar}></Text>
                </View>
                <View style={styles.inputContainer2}>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.textName}>Password Again</Text>
                        <TextInput
                            style={styles.mainTextInput4Confirm}
                            value={this.state.confirm}
                            onChangeText={(text) => {
                                this.handleUpdateState('confirm', text)
                            }}
                            secureTextEntry={true}
                            placeholder="Confirm" textAlign="right" />
                    </View>
                    <Text style={styles.horizontaBar}></Text>
                </View>
                <View style={styles.inputContainer2}>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.textName}>Phone Number</Text>
                        <TextInput style={styles.mainTextInput4Phone} placeholder="+233 (244) 245 190" textAlign="right" />
                    </View>
                    <Text style={styles.horizontaBar}></Text>
                </View>
                <View style={styles.inputContainer2}>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.textName}>Role          </Text>
                        <TextInput style={styles.mainTextInput} placeholder="Director of Marketing" textAlign="right" />
                    </View>
                    <Text style={styles.horizontaBar}></Text>
                </View>
                <View style={styles.inputContainer2}>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.textName}>Twitter     </Text>
                        <TextInput style={styles.mainTextInput} placeholder="@mdarko" textAlign="right" />
                    </View>
                    <Text style={styles.horizontaBar}></Text>
                </View>
                <View style={styles.inputContainer2}>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.textName}>LinkedIn  </Text>
                        <TextInput style={styles.mainTextInput} placeholder="/maxwell.darko" textAlign="right" />
                    </View>
                    <Text style={styles.horizontaBar}></Text>
                </View>
                <TouchableOpacity style={styles.RegisterButton}
                    onPress={this.handleOnSubmit}
                >
                    <Text style={styles.RegisterText}>REGISTER</Text>
                </TouchableOpacity>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    profilePictureBackground: {
        width: 360,
        height: 180,
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -155
    },
    icon: {
        position: 'absolute',
        marginLeft: 33,
        marginTop: 18,
    },
    profilePicText: {
        fontWeight: 'bold',
        marginTop: 90
    },
    inputContainer: {
        marginTop: 80
    },
    inputContainer2: {
        marginTop: 25
    },
    textInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 15
    },
    textName: {
        fontSize: 16,
        marginLeft: 3
    },
    mainTextInput: {
        width: 250,
    },
    mainTextInput4Confirm: {
        width: 204
    },
    mainTextInput4Phone: {
        width: 210
    },
    horizontaBar: {
        height: 1,
        width: 321,
        backgroundColor: '#989898',
        marginHorizontal: 20,
        marginVertical: 5
    },
    RegisterButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff3333',
        borderRadius: 25,
        marginHorizontal: 95,
        height: 45,
        marginTop: 40,
        marginBottom: 30
    },
    RegisterText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
})

const mapStateToProp = (state) => {
    return { auth: state }
}

export default connect(mapStateToProp, { createEmailAccount, registerError })(Register);
