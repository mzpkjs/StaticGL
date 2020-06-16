import gl from "./webglContext"



const glGetProgramParameter = (program: WebGLProgram, pname: GLenum): any => {
    return gl.getProgramParameter(program, pname) as any
}



export default glGetProgramParameter