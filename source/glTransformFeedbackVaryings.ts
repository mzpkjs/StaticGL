import gl from "./webglContext"



const glTransformFeedbackVaryings = (program: WebGLProgram, varyings: string[], bufferMode: GLenum): void => {
    (gl as WebGL2RenderingContext).transformFeedbackVaryings(program, varyings, bufferMode)
}



export default glTransformFeedbackVaryings