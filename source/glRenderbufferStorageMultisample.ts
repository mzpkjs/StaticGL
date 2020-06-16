import gl from "./webglContext"



const glRenderbufferStorageMultisample = (
    target: GLenum, samples: GLsizei, internalformat: GLenum,
    width: GLsizei, height: GLsizei
): void => {
    (gl as WebGL2RenderingContext).renderbufferStorageMultisample(target, samples, internalformat, width, height)
}



export default glRenderbufferStorageMultisample