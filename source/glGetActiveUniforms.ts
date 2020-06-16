import gl from "./webglContext"



const glGetActiveUniforms = (program: WebGLProgram, uniformIndices: GLuint[], pname: GLenum): any => {
    return (gl as WebGL2RenderingContext).getActiveUniforms(program, uniformIndices, pname)
}



export default glGetActiveUniforms