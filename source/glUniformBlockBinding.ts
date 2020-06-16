import gl from "./webglContext"



const glUniformBlockBinding = (program: WebGLProgram, uniformBlockIndex: GLuint, uniformBlockBinding: GLuint): void => {
    (gl as WebGL2RenderingContext).uniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding)
}



export default glUniformBlockBinding