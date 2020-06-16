import gl from "./webglContext"



const glGetQuery = (target: GLenum, pname: GLenum): WebGLQuery => {
    return (gl as WebGL2RenderingContext).getQuery(target, pname) as WebGLQuery
}



export default glGetQuery