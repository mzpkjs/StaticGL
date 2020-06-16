import gl from "./webglContext"



const glWaitSync = (sync: WebGLSync, flags: GLbitfield, timeout: GLint64): void => {
    (gl as WebGL2RenderingContext).waitSync(sync, flags, timeout)
}



export default glWaitSync