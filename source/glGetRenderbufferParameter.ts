import gl from "./webglContext"



const glGetRenderbufferParameter = (target: GLenum, pname: GLenum): any => {
    return gl.getRenderbufferParameter(target, pname) as any
}



export default glGetRenderbufferParameter