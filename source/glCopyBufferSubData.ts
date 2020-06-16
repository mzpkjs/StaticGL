import gl from "./webglContext"



const glCopyBufferSubData = (
    readTarget: GLenum, writeTarget: GLenum,
    readOffset: GLintptr, writeOffset: GLintptr,
    size: GLsizeiptr
): void => {
    (gl as WebGL2RenderingContext).copyBufferSubData(readTarget, writeTarget, readOffset, writeOffset, size)
}



export default glCopyBufferSubData