import gl from "./webglContext"



const glDeleteProgram = (program: WebGLProgram | null): void => {
    gl.deleteProgram(program)
}



export default glDeleteProgram