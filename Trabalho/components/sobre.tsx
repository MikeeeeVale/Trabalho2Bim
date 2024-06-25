import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Home from './home';
import Imagem7 from './Img/logogrande.png';

import Imagem3 from './Img/Group5.png';
import Imagem4 from './Img/Group4.png';

export default function App() {
    const [page, setPage] = React.useState('sobre');

    const renderPage = () => {
        if (page === 'sobre') {
            return (
                <View style={styles.container}>
                    <Image source={Imagem4} />
                    <Text style={styles.title}>Página Sobre</Text>
                    <Image source={Imagem7} style={styles.img}/>
                    <Text style={styles.texto}>Latitude: 0</Text>
                    <Text style={styles.texto}>Longitude: 0</Text>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
                        <Text style={styles.buttonText}>Obter Localização</Text>
                    </TouchableOpacity>
                    <Image source={Imagem3}/>
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
        backgroundColor:'#ffff',
    },
    title: {
        fontSize:35,
        fontWeight: 'bold',
        color: '#4D5E82',
        marginBottom:20,
    },
    img:{
        height:200,
        width:200,

    },
    texto: {
        fontSize:25,
        fontWeight: 'bold',
        color: '#4D5E82',
        marginBottom:20,
        padding: 0,
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