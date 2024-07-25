import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F3F5',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    padding: 24,
    fontSize:20
  },
  content: {
    width: '100%',
  },
  footer: {
    width: '100%',
    padding: 24,
    marginBottom: getBottomSpace() + 24,
    alignItems: 'center', 
  },
  button: {
    width: '80%',
    height: 50,
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
      fontSize: 23,
      fontWeight: 'bold',
  },
});
