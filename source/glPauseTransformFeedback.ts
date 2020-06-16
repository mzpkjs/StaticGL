import gl from "./webglContext"



const glPauseTransformFeedback = (): void => {
    (gl as WebGL2RenderingContext).pauseTransformFeedback()
}



export default glPauseTransformFeedback