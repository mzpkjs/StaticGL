import gl from "./webglContext"



const glDrawBuffers = (buffers: GLenum[]): void => {
    (gl as WebGL2RenderingContext).drawBuffers(buffers)
}



export default glDrawBuffers