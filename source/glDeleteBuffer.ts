import gl from "./webglContext"



const glDeleteBuffer = (buffer: WebGLBuffer | null): void => {
    gl.deleteBuffer(buffer)
}



export default glDeleteBuffer