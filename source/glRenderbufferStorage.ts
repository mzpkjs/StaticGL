import gl from "./webglContext"



const glRenderbufferStorage = (target: GLenum, internalformat: GLenum, width: GLsizei, height: GLsizei): void => {
    (gl as WebGL2RenderingContext).renderbufferStorage(target, internalformat, width, height)
}



export default glRenderbufferStorage