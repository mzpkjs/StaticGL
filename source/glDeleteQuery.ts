import gl from "./webglContext"



const glDeleteQuery = (query: WebGLQuery | null): void => {
    (gl as WebGL2RenderingContext).deleteQuery(query)
}



export default glDeleteQuery