import gl from "./webglContext"



const glFramebufferTexture2D = (
    target: GLenum,
    attachment: GLenum,
    textarget: GLenum,
    texture: WebGLTexture | null,
    level: GLint
): void => {
    gl.framebufferTexture2D(target, attachment, textarget, texture, level)
}



export default glFramebufferTexture2D