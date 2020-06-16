import gl from "./webglContext"



const glGetUniform = (program: WebGLProgram, location: WebGLUniformLocation): any => {
    return gl.getUniform(program, location) as any
}



export default glGetUniform