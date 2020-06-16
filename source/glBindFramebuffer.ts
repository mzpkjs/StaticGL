import gl from "./webglContext"



const glBindFramebuffer = (target: GLenum, framebuffer: WebGLFramebuffer | null): void => {
    gl.bindFramebuffer(target, framebuffer)
}



export default glBindFramebuffer