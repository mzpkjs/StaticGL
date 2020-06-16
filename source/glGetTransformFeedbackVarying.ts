import gl from "./webglContext"



const glGetTransformFeedbackVarying = (program: WebGLProgram, index: GLuint): WebGLActiveInfo => {
    return (gl as WebGL2RenderingContext).getTransformFeedbackVarying(program, index) as WebGLActiveInfo
}



export default glGetTransformFeedbackVarying