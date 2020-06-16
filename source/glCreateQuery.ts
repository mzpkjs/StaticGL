import gl from "./webglContext"



const glCreateQuery = (): WebGLQuery => {
    return (gl as WebGL2RenderingContext).createQuery() as WebGLQuery
}



export default glCreateQuery