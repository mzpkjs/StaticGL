import gl from "./webglContext"



const glGetProgramInfoLog = (program: WebGLProgram): string => {
    return gl.getProgramInfoLog(program) as string
}



export default glGetProgramInfoLog