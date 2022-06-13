
import addImage from "./add-images";

import heading from "./components/heading/heading";
import HelloWorldButton from "./components/hello-world-button/hello-world-button";

const head=new heading()
head.render()


const helloWorld=new HelloWorldButton()
helloWorld.render()

addImage()
if(process.env.NODE_ENV==='production'){
    console.log("production mode");

}
else if(process.env.NODE_ENV==='development'){
    console.log("development Mode");
}

