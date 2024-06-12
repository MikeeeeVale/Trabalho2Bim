import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Sobre from './sobre';
import Imagem from 'Trabalho/components/Img/home.png';

export default function App() {
    const [page, setPage] = React.useState('home');

    const renderPage = () => {
        if (page === 'home') {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>LocalizAI</Text>
                    <Text style={styles.texto}>Está perdido e não sabe o que fazer? Essa é a plataforma de localização em tempo real perfeita para você. Use o LocalizAI e nunca mais fique perdido!</Text>
                    <image source={Imagem} style={styles.img}/>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
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
    },
    button: {
        backgroundColor:'#fff',
        padding:10,
        borderRadius:5,
        
    },
    buttonText: {
        color:'#4D5E82',
        fontSize:16,
        fontWeight: 'bold',
    },
});