import gl from "./webglContext"



const glDeleteTransformFeedback = (tf: WebGLTransformFeedback | null): void => {
    (gl as WebGL2RenderingContext).deleteTransformFeedback(tf)
}



export default glDeleteTransformFeedback