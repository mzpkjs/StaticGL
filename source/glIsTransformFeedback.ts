import gl from "./webglContext"



const glIsTransformFeedback = (tf: WebGLTransformFeedback | null): GLboolean => {
    return (gl as WebGL2RenderingContext).isTransformFeedback(tf)
}



export default glIsTransformFeedback