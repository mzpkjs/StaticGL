import gl from "./webglContext"



const glInvalidateSubFramebuffer = (target: GLenum, attachments: GLenum[], x: GLint, y: GLint, width: GLsizei, height: GLsizei): void => {
    (gl as WebGL2RenderingContext).invalidateSubFramebuffer(target, attachments, x, y, width, height)
}



export default glInvalidateSubFramebuffer