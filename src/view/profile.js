export default () => {
const viewProfile = `
    <h1> viewProfile </h1>
`;
const divElement = document.createElement('div');
divElement.setAttribute('id', 'message');
divElement.innerHTML = viewProfile;
return divElement;
   }