import gl from "./webglContext"



const glAttachShader = (program: WebGLProgram, shader: WebGLShader): void => {
    gl.attachShader(program, shader)
}



export default glAttachShader