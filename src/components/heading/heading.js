import "./heading.scss"
class heading{
    render(){
        const h1 =document.createElement('h1')
        const body=document.querySelector('body')
        h1.innerHTML='web pack is aswome'
        body.appendChild(h1)
    }
}
export default heading