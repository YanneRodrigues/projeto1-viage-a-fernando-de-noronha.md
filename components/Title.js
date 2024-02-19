import { View, Text, StyleSheet } from 'react-native'

export function Title() {
  return(
    <View  style={styles.container}>
    <Text style={styles.nome}>Explore as Maravilhosas Praias</Text>
    </View>
  )
}
 
 const styles = StyleSheet.create({
   container: {
     backgroundColor: '#FF8C00',
     padding: 20,
   },

   nome: {
     fontWeight: 'bold',
     fontSize: 17,
     color: '#ffffff',
     textAlign: 'center',
   }
 })
