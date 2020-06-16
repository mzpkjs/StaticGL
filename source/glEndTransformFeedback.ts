import gl from "./webglContext"



const glEndTransformFeedback = (): void => {
    (gl as WebGL2RenderingContext).endTransformFeedback()
}



export default glEndTransformFeedback