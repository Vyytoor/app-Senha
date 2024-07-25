import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 130,
    backgroundColor: '#1967FB',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 4,
    borderColor: '#E3E3E3',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    flex: 1,
    marginLeft: 12
  },
  title: {
    color: '#FFF',
    fontSize: 25,
    fontWeight:'bold'
  },
  subtitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight:'bold'
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 5,
  }

});
