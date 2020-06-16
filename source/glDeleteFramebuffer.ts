import gl from "./webglContext"



const glDeleteFramebuffer = (framebuffer: WebGLFramebuffer | null): void => {
    gl.deleteFramebuffer(framebuffer)
}



export default glDeleteFramebuffer