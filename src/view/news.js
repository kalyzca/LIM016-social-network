export default () => {
const viewNews = `
    <h1> viewNews </h1>
`;
const divElement = document.createElement('div');
divElement.setAttribute('id', 'message');
divElement.innerHTML = viewNews;
return divElement;
   }