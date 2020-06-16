import gl from "./webglContext"



const glUseProgram = (program: WebGLProgram | null): void => {
    gl.useProgram(program)
}



export default glUseProgram