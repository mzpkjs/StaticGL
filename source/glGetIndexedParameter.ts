import gl from "./webglContext"



const glGetIndexedParameter = (target: GLenum, index: GLuint): any => {
    return (gl as WebGL2RenderingContext).getIndexedParameter(target, index) as any
}



export default glGetIndexedParameter