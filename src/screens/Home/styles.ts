import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F5',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3D434D'
  },
  listHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  listCount: {
    color: '#888D97',
    fontSize: 13,
  },
  list: {
    flex: 1,
    width: '100%',
    
  },
  listContent: {
    padding: 12,
    paddingBottom: 150,
  },
  footer: {
    width: '100%',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
      width: '70%',
      height: 35,
      backgroundColor: '#007BFF',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
  },
  buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
  },
});
