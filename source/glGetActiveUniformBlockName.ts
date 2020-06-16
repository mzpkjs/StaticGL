import gl from "./webglContext"



const glGetActiveUniformBlockName = (program: WebGLProgram, uniformBlockIndex: GLuint): string => {
    return (gl as WebGL2RenderingContext).getActiveUniformBlockName(program, uniformBlockIndex) as string
}



export default glGetActiveUniformBlockName