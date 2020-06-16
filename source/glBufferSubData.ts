import gl from "./webglContext"



export type WebGLVariant = {
    (target: GLenum, dstByteOffset: GLintptr, srcData: BufferSource): void
}

export type WebGL2Variant = {
    (target: GLenum, dstByteOffset: GLintptr, srcData: BufferSource): void
    (target: GLenum, dstByteOffset: GLintptr, srcData: ArrayBufferView, srcOffset: GLuint, length?: GLuint): void
}


const glBufferSubData = (
    target: GLenum, dstByteOffset: GLintptr,
    srcData: BufferSource & ArrayBufferView,
    srcOffset: GLuint, length?: GLuint
): void => {
    gl.bufferSubData(target, dstByteOffset, srcData, srcOffset, length)
}



export default glBufferSubData as WebGLVariant & WebGL2Variant
