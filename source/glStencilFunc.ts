import gl from "./webglContext"



const glStencilFunc = (func: GLenum, ref: GLint, mask: GLuint): void => {
    gl.stencilFunc(func, ref, mask)
}



export default glStencilFunc