import gl from "./webglContext"



const glEndQuery = (target: GLenum): void => {
    (gl as WebGL2RenderingContext).endQuery(target)
}



export default glEndQuery