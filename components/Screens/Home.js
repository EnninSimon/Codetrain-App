import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import qrCode from '../../assets/qrCode.png';
import user1 from '../../assets/user1.jpg'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Entypo } from '@expo/vector-icons';

const Home = ({ navigation }) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [showScanner, setShowScanner] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = () => {
        setShowScanner(false)
        setScanned(false);
        navigation.navigate("MyProfile")
    };

    if (hasPermission === null) {
    return (<View >
        <Text style={styles.requestContainer}>Requesting for camera permissions</Text> 
        <Entypo style={styles.sadEmoji} name="camera" size={60} color="black" />
    </View>)
}
    if (hasPermission === false) {
        return (<View>
           <Text style={styles.requestContainer}>No access to camera!</Text>
           <Entypo style={styles.sadEmoji} name="emoji-sad" size={60} color="black" />
       </View>);
    }



    return (
        <View>
            <View style={styles.exchangeContainer}>
                <Text style={styles.QRtext1}>Exchange Contact Information</Text>
                <Text style={styles.QRtext2}>Scan this QR code below to share your contacts</Text>
            </View>
            <View style={styles.qrCodeImageContainer}>
                <Image source={qrCode} style={styles.qrCodeImage} />
            </View>

            <View style={styles.userContainer}>
                <Image source={user1} style={styles.userImage} />
                <View>
                    <Text style={styles.userName}>Joan Shay</Text>
                    <Text style={styles.userRole}>Head of Marketing</Text>
                </View>
            </View>
            {
                showScanner && <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            }

            <Text style={styles.horizontalLine}></Text>
            <View style={styles.scanContainer}>
                <Text style={styles.scanText1}>Want to add a new connection?</Text>
                {
                    <TouchableOpacity onPress={() => setShowScanner(true)}>
                        <Text style={styles.scanText2}>Scan QR</Text>
                    </TouchableOpacity>
                }
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    exchangeContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginTop: 80
    },
    requestContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
        marginTop: 300,
        marginHorizontal: 80,
        fontSize: 20,
    },
    sadEmoji:{
        marginHorizontal: 143,
        marginTop: 30,
    }, 
    QRtext1: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    QRtext2: {
        fontSize: 17,
        color: "#727272"
    },
    qrCodeImageContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 60
    },
    qrCodeImage: {
        height: 250,
        width: 250
    },
    userContainer: {
        marginTop: 55,
        marginHorizontal: 30,
        display: 'flex',
        flexDirection: 'row'
    },
    userImage: {
        height: 50,
        width: 50,
        borderRadius: 30,
        marginTop: 7
    },
    userName: {
        marginHorizontal: 10,
        marginVertical: 6,
        fontWeight: 'bold',
        fontSize: 17
    },
    userRole: {
        marginHorizontal: 10,
        fontSize: 15,
        color: "#727272"
    },
    horizontalLine: {
        height: 1.5,
        width: 360,
        backgroundColor: "#bebebe",
        fontWeight: 'bold',
        marginTop: 30
    },
    scanContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 25,
    },
    scanText1: {
        fontSize: 16,
        marginTop: 5,
    },
    scanText2: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingRight: 14,
        paddingLeft: 14,
        borderColor: 'red',
        color: 'red',
        borderWidth: 1,
        borderRadius: 3,
        fontSize: 16,
        marginLeft: 10,
    }
})

export default Home;
