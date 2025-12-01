import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Button
} from 'react-native';

// 1. Calculamos el ancho exacto para 3 columnas
const screenWidth = Dimensions.get('window').width;
const imageWidth = screenWidth / 4;

const images = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=300&h=300&fit=crop',
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Cabecera simulando Instagram */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Borja_Dev</Text>
        </View>

        <ScrollView>
          {/* SECCIÓN 1: Perfil */}
          <View style={styles.seccion1}>
            <View style={styles.profileRow}>
              {/* Avatar */}
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=150&h=150' }}
                style={styles.avatar}
              />
              {/* Estadísticas */}
              <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>20</Text>
                  <Text style={styles.statLabel}>Posts</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>110k</Text>
                  <Text style={styles.statLabel}>Followers</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>1103</Text>
                  <Text style={styles.statLabel}>Following</Text>
                </View>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <View style={styles.editButton}>
                <Text>Edit Profile</Text>
              </View>
            </View>
          </View>

          {/* SECCIÓN 2: Galería de imágenes */}
          <View style={styles.seccion2}>
            {images.map((imagen, index) => (
              <Image
                key={index}
                source={{ uri: imagen }}
                style={styles.imagen} // Usamos el estilo con el ancho dinámico
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 30 // Para salvar el notch
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  seccion1: {
    padding: 15,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40, // Esto lo hace redondo
  },
  statsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    marginLeft: 20
  },
  statItem: {
    alignItems: 'center'
  },
  statNumber: {
    fontWeight: 'bold',
    fontSize: 16
  },
  statLabel: {
    fontSize: 12,
    color: 'gray'
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  editButton: {
    flex: 1,
    backgroundColor: '#efefef',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd'
  },
  // ESTILOS CLAVE PARA LA GALERÍA
  seccion2: {
    flexDirection: 'row', // Los pone en fila
    flexWrap: 'wrap',     // IMPORTANTE: Permite que salten de línea
    alignContent: 'flex-start',
  },
  imagen: {
    width: imageWidth,    // Ancho calculado (pantalla / 3)
    height: imageWidth,   // Misma altura para que sean cuadrados
    borderWidth: 1,       // Pequeño borde blanco para separarlas
    borderColor: 'white'
  },
});