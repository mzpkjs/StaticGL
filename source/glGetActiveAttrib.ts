import gl from "./webglContext"



const glGetActiveAttrib = (program: WebGLProgram, index: GLuint): WebGLActiveInfo => {
    return gl.getActiveAttrib(program, index) as WebGLActiveInfo
}



export default glGetActiveAttrib