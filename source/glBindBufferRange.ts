import gl from "./webglContext"



const glBindBufferRange = (target: GLenum, index: GLuint, buffer: WebGLBuffer | null, offset: GLintptr, size: GLsizeiptr): void => {
    (gl as WebGL2RenderingContext).bindBufferRange(target, index, buffer, offset, size)
}



export default glBindBufferRange