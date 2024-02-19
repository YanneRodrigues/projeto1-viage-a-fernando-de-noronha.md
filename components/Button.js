import { View, Text, StyleSheet } from 'react-native'

export function Button() {
  return(
    <View>
      <Text style={styles.container}>Reserve sua viagem</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#B0C4DE',
    color: '#0000FF',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    padding: 20,
    margin: 15,
    marginTop: 35,
  }
})

