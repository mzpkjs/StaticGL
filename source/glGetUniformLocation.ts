import gl from "./webglContext"



const glGetUniformLocation = (program: WebGLProgram, name: string): WebGLUniformLocation => {
    return gl.getUniformLocation(program, name) as WebGLUniformLocation
}



export default glGetUniformLocation