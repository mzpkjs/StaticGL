import gl from "./webglContext"



const glCreateFramebuffer = (): WebGLFramebuffer => {
    return gl.createFramebuffer() as WebGLFramebuffer
}



export default glCreateFramebuffer