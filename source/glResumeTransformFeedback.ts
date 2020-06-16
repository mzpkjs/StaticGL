import gl from "./webglContext"



const glResumeTransformFeedback = (): void => {
    (gl as WebGL2RenderingContext).resumeTransformFeedback()
}



export default glResumeTransformFeedback