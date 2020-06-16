import gl from "./webglContext"



const glFramebufferRenderbuffer = (
    target: GLenum,
    attachment: GLenum,
    renderbuffertarget: GLenum,
    renderbuffer: WebGLRenderbuffer | null
): void => {
    gl.framebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer)
}



export default glFramebufferRenderbuffer