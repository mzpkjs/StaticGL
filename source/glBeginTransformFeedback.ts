import gl from "./webglContext"



const glBeginTransformFeedback = (primitiveMode: GLenum): void => {
    (gl as WebGL2RenderingContext).beginTransformFeedback(primitiveMode)
}



export default glBeginTransformFeedback