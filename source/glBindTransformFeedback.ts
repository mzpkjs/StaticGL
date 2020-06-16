import gl from "./webglContext"



const glBindTransformFeedback = (target: GLenum, tf: WebGLTransformFeedback | null): void => {
    (gl as WebGL2RenderingContext).bindTransformFeedback(target, tf)
}



export default glBindTransformFeedback