import gl from "./webglContext"



const glGetUniformIndices = (program: WebGLProgram, uniformNames: string[]): GLuint[] => {
    return (gl as WebGL2RenderingContext).getUniformIndices(program, uniformNames) as GLuint[]
}



export default glGetUniformIndices