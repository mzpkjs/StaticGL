import gl from "./webglContext"



const glClientWaitSync = (sync: WebGLSync, flags: GLbitfield, timeout: GLuint64): GLenum => {
    return (gl as WebGL2RenderingContext).clientWaitSync(sync, flags, timeout)
}



export default glClientWaitSync