import gl from "./webglContext"



const glGetBufferParameter = (target: GLenum, pname: GLenum): any => {
    return gl.getBufferParameter(target, pname)
}



export default glGetBufferParameter