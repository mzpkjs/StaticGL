import gl from "./webglContext"



const glGetQueryParameter = (query: WebGLQuery, pname: GLenum): any => {
    return (gl as WebGL2RenderingContext).getQueryParameter(query, pname)
}



export default glGetQueryParameter