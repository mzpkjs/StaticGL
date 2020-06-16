import gl from "./webglContext"



const glIsProgram = (program: WebGLProgram | null): GLboolean => {
    return gl.isProgram(program)
}



export default glIsProgram