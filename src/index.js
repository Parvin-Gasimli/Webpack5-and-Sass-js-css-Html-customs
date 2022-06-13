
import addImage from "./add-images";

import heading from "./components/heading/heading";
import HelloWorldButton from "./components/hello-world-button/hello-world-button";

const head=new heading()
head.render()


const helloWorld=new HelloWorldButton()
helloWorld.render()

addImage()

