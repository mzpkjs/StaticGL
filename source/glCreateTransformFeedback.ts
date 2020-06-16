import gl from "./webglContext"



const glCreateTransformFeedback = (): WebGLTransformFeedback => {
    return (gl as WebGL2RenderingContext).createTransformFeedback() as WebGLTransformFeedback
}



export default glCreateTransformFeedback