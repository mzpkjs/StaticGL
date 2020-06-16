import gl from "./webglContext"



const glIsFramebuffer = (framebuffer: WebGLFramebuffer | null): GLboolean => {
    return gl.isFramebuffer(framebuffer)
}



export default glIsFramebuffer