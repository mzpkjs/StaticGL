import gl from "./webglContext"



const glGetFramebufferAttachmentParameter = (target: GLenum, attachment: GLenum, pname: GLenum): any => {
    return gl.getFramebufferAttachmentParameter(target, attachment, pname) as any
}



export default glGetFramebufferAttachmentParameter