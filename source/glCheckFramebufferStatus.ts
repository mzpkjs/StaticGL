import gl from "./webglContext"



const glCheckFramebufferStatus = (target: GLenum): GLenum => {
    return gl.checkFramebufferStatus(target)
}



export default glCheckFramebufferStatus