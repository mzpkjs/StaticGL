import gl from "./webglContext"



const glStencilFuncSeparate = (face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void => {
    gl.stencilFuncSeparate(face, func, ref, mask)
}



export default glStencilFuncSeparate