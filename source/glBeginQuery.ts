import gl from "./webglContext"



const glBeginQuery = (target: GLenum, query: WebGLQuery): void => {
    (gl as WebGL2RenderingContext).beginQuery(target, query)
}



export default glBeginQuery