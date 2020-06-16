import gl from "./webglContext"



const glIsQuery = (query: WebGLQuery | null): GLboolean => {
    return (gl as WebGL2RenderingContext).isQuery(query)
}



export default glIsQuery