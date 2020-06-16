import gl from "./webglContext"



const glValidateProgram = (program: WebGLProgram): void => {
    gl.validateProgram(program)
}



export default glValidateProgram