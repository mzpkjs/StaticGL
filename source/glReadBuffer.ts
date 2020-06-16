import gl from "./webglContext"



const glReadBuffer = (src: GLenum): void => {
    (gl as WebGL2RenderingContext).readBuffer(src)
}



export default glReadBuffer