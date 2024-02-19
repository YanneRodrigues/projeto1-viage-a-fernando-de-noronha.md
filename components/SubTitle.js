import { View, Text, StyleSheet } from 'react-native'

export function SubTitle () {
  return (
    <View>
      <Text style={styles.container}>Visite as praias de Fernando de Noronha e mergulhe nas águas azul-turqueza.</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    marginLeft: 10,
  }
})