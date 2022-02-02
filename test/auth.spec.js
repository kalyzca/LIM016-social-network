// Importamos las funciones de firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  signInWithPopup,
} from '../src/lib/firebase/config';

// Importamos las funciones que vamos a testear
import { createUser, loginUser, userStateChange } from '../src/lib/firebase/auth';
// import { saveUser } from '../src/lib/firebase/firestore.js';
jest.mock('../src/lib/firebase/config.js');

// Llamamos a la función que mockea las funciones de firebase
// Testeando el registro de un usuario con firebase - auth
describe('probar la función createUser', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof createUser).toBe('function');
  });
  it('Debería poder registrar a un usuario', () => createUser('marita@gmail.com', '12355687').then(() => {
    expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('marita@gmail.com');
    expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('12355687');
  }));
});
describe('probar la función loginUser', () => {
  it('Debería permitir que el usuario entre a la app', () => {
    loginUser('marita@gmail.com', '12355687').then(() => {
      expect(signInWithEmailAndPassword.mock.calls[0][1]).toBe('marita@gmail.com');
      expect(signInWithEmailAndPassword.mock.calls[0][2]).toBe('12355687');
    });
  });
});
describe('probar la función userStateChange', () => {
  it('Debería permitir obtener los datos del usuario', () => {
    const user = () => {};
    userStateChange(user).then(() => {
      expect(onAuthStateChanged.mock.calls[0][1]).toBe(user);
    });
  });
});
describe('probar la función signOut', () => {
  it('Debería salir de sesión', () => {
    signOut().then(() => {
      expect(signOut.mock.calls[0][1]).toBe();
    });
  });
});
describe('probar la función sendEmailVerification', () => {
  it('Debería enviar un email de verificación al usuario', () => {
    sendEmailVerification().then(() => {
      expect(sendEmailVerification.mock.calls[0][1]).toBe();
    });
  });
});
describe('probar la función signInWithPopup', () => {
  const result = { correo: 'kaly@gmail.com', id: 123456 };
  it('Debería abrir el popup de google', () => {
    signInWithPopup().then(() => {
      expect(signInWithPopup.mock.calls[0][1]).toBe(result);
    });
  });
});
/* describe('probar la función createUser', () => {
  it('Debería retornar al usuario creado', async () => {
    const result = await saveUser('karenberrio@gmail.com', '123456',
    'PsCjKz4DgTMRVTy6POdDYzmL2bD3', 'karen');
    expect(result).toEqual({
      email: 'karenberrio@gmail.com',
      password: '123456',
      uid: 'PsCjKz4DgTMRVTy6POdDYzmL2bD3',
      user: 'karen',
    });
  });
}); */
