// Importamos las funciones de firebase
import { createUserWithEmailAndPassword } from '../src/lib/firebase/config';

// Importamos las funciones que vamos a testear
import { createUser } from '../src/lib/firebase/auth';

// Llamamos a la función que mockea las funciones de firebase
jest.mock('../src/lib/firebase/config.js');

// Testeando el registro de un usuario con firebase - auth
describe('Registro de un usuario', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof createUser).toBe('function');
  });
  it('Debería poder registrar a un usuario', () => createUser('marita@gmail.com', '12355687')
    .then(() => {
      expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('marita@gmail.com');
      expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('12355687');
    }));
});
