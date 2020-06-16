import gl from "./webglContext"



const glStencilOp = (fail: GLenum, zfail: GLenum, zpass: GLenum): void => {
    gl.stencilOp(fail, zfail, zpass)
}



export default glStencilOp