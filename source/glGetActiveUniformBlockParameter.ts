import gl from "./webglContext"



const glGetActiveUniformBlockParameter = (program: WebGLProgram, uniformBlockIndex: GLuint, pname: GLenum): any => {
    return (gl as WebGL2RenderingContext).getActiveUniformBlockParameter(program, uniformBlockIndex, pname)
}



export default glGetActiveUniformBlockParameter