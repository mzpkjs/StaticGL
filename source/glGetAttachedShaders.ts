import gl from "./webglContext"



const glGetAttachedShaders = (program: WebGLProgram): WebGLShader[] => {
    return gl.getAttachedShaders(program) as WebGLShader[]
}



export default glGetAttachedShaders