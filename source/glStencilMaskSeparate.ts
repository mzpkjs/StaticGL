import gl from "./webglContext"



const glStencilMaskSeparate = (face: GLenum, mask: GLuint): void => {
    gl.stencilMaskSeparate(face, mask)
}



export default glStencilMaskSeparate