// mockeando auth
export const auth = jest.fn();

// mockeando estado de cambio de un usuario.
export const onAuthStateChanged = jest.fn(() => Promise.resolve({}));

// mockeando para crear un usuario
export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve({}));

// mockeando el envio de un email de verificación
export const sendEmailVerification = jest.fn(() => Promise.resolve({}));

// mockeando la base de datos
export const db = jest.fn();
