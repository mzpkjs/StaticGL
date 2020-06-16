import gl from "./webglContext"



const glGetActiveUniform = (program: WebGLProgram, index: GLuint): WebGLActiveInfo => {
    return gl.getActiveUniform(program, index) as WebGLActiveInfo
}



export default glGetActiveUniform