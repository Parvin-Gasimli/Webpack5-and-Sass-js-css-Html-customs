
import altText from '../src/altText.txt'
function addImage(){
    const img=document.createElement("img")
    img.alt=altText
    img.src='20503218.png'
    img.height=300
    img.width=300
    const body=document.querySelector('body')
    body.appendChild(img)
}
export default addImage