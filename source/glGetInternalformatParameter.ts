import gl from "./webglContext"



const glGetInternalformatParameter = (target: GLenum, internalformat: GLenum, pname: GLenum): any => {
    return (gl as WebGL2RenderingContext).getInternalformatParameter(target, internalformat, pname)
}



export default glGetInternalformatParameter