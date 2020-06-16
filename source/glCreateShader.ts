import gl from "./webglContext"



const glCreateShader = (type: GLenum): WebGLShader => {
    return gl.createShader(type) as WebGLShader
}



export default glCreateShader