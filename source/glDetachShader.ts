import gl from "./webglContext"



const glDetachShader = (program: WebGLProgram, shader: WebGLShader): void => {
    gl.detachShader(program, shader)
}



export default glDetachShader