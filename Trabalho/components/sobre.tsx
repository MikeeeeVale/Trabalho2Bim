import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Home from './home';
import Imagem7 from './Img/Group1.png';

export default function App() {
    const [page, setPage] = React.useState('sobre');

    const renderPage = () => {
        if (page === 'sobre') {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Página Sobre</Text>
                    <Image source={Imagem7} style={styles.img}/>
                    <Text style={styles.texto}>Latitude: 0</Text>
                    <Text style={styles.texto}>Longitude: 0</Text>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
                        <Text style={styles.buttonText}>Obter Localização</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (page === 'home'){
            return <Home />;
        }
    };

    return <View style={styles.container}>{renderPage()}</View>;
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#4D5E82',
    },
    title: {
        fontSize:50,
        fontWeight: 'bold',
        color: '#ffff',
        marginBottom:20,
    },
    texto: {
        fontSize:25,
        fontWeight: 'bold',
        color: '#ffff',
        marginBottom:20,
        padding: 25,
    },
    button: {
        backgroundColor:'#fff',
        padding:10,
        borderRadius:5,
        shadowRadius:5,
        
    },
    buttonText: {
        color:'#4D5E82',
        fontSize:16,
        fontWeight: 'bold',
    },
});