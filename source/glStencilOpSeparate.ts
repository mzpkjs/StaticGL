import gl from "./webglContext"



const glStencilOpSeparate = (face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void => {
    gl.stencilOpSeparate(face, fail, zfail, zpass)
}



export default glStencilOpSeparate