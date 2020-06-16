import gl from "./webglContext"



const glGetUniformBlockIndex = (program: WebGLProgram, uniformBlockName: string): GLuint => {
    return (gl as WebGL2RenderingContext).getUniformBlockIndex(program, uniformBlockName) as GLuint
}



export default glGetUniformBlockIndex