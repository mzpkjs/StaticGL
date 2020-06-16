import gl from "./webglContext"



const glGetBufferSubData = (
    target: GLenum,
    srcByteOffset: GLintptr,
    dstBuffer: ArrayBufferView,
    dstOffset?: GLuint,
    length?: GLuint
): void => {
    (gl as WebGL2RenderingContext).getBufferSubData(target, srcByteOffset, dstBuffer, dstOffset, length)
}



export default glGetBufferSubData