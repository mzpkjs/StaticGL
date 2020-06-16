import { __secretly_bind_gl_function } from "./webglContext"



export type WebGLVariant = {
    (
        target: GLenum, level: GLint, internalformat: GLenum,
        width: GLsizei, height: GLsizei, border: GLint,
        data: ArrayBufferView
    ): void
}

export type WebGL2Variant = {
    (
        target: GLenum, level: GLint, internalformat: GLenum,
        width: GLsizei, height: GLsizei, border: GLint,
        imageSize: GLsizei, offset: GLintptr
    ): void
    (
        target: GLenum, level: GLint, internalformat: GLenum,
        width: GLsizei, height: GLsizei, border: GLint,
        srcData: ArrayBufferView, srcOffset?: GLuint, srcLengthOverride?: GLuint
    ): void
}


const glCompressedTexSubImage2D = __secretly_bind_gl_function("compressedTexSubImage2D")



export default glCompressedTexSubImage2D as WebGLVariant & WebGL2Variant