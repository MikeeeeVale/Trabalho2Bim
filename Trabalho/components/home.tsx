import React from 'react';
import {Text, View, ImageBackground, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Sobre from './sobre';
import Imagem1 from './Img/home.png';
import Imagem2 from './Img/Group3.png';

import Imagem3 from './Img/Group5.png';
import Imagem4 from './Img/Group4.png';

export default function App() {
    const [page, setPage] = React.useState('home');

    const renderPage = () => {
        if (page === 'home') {
            return (
                <View style={styles.container}>
                    <Image source={Imagem4} style={styles.img}/>
                    <Image source={Imagem2} style={styles.img}/>
                    <Text style={styles.texto}>Está perdido e não sabe o que fazer? Essa é a plataforma de localização em tempo real perfeita para você. Use o LocalizAI e nunca mais fique perdido!</Text>
                    <Image source={Imagem1} style={styles.img}/>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                    <Image source={Imagem3} style={styles.img}/>
                </View>
            );
        } else if (page === 'sobre'){
            return <Sobre/>;
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