import gl from "./webglContext"



const glInvalidateFramebuffer = (target: GLenum, attachments: GLenum[]): void => {
    (gl as WebGL2RenderingContext).invalidateFramebuffer(target, attachments)
}



export default glInvalidateFramebuffer