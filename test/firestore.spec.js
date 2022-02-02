// Importamos las funciones de firestore
// import { addDoc, collection, db } from '../src/lib/firebase/config';

// Importamos las funciones que vamos a testear
// import { saveUser } from '../src/lib/firebase/firestore.js';

// Llamamos a la función que mockea las funciones de firebase
jest.mock('../src/lib/firebase/config.js');

// Testeando el registro de un usuario con firebase - auth
// describe('probar la función saveUser', () => {
//   it('Deberia subir data a la coleccion saveUsers', () => saveUser('karenberrio@gmail.com', '123456', 'karen', 'PsCjKz4DgTMRVTy6POdDYzmL2bD3'));

//   it('Debería retornar al usuario creado', async () => {
//     const result = await addDoc(collection(db, 'saveUsers'));
//     expect(result).toEqual({
//       email: 'karenberrio@gmail.com',
//       password: '123456',
//       uid: 'PsCjKz4DgTMRVTy6POdDYzmL2bD3',
//       user: 'karen',
//     });
//   });
// });
