import gl from "./webglContext"



const glStencilMask = (mask: GLuint): void => {
    gl.stencilMask(mask)
}



export default glStencilMask