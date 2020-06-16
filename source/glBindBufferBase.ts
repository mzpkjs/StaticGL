import gl from "./webglContext"



const glBindBufferBase = (target: GLenum, index: GLuint, buffer: WebGLBuffer | null): void => {
    (gl as WebGL2RenderingContext).bindBufferBase(target, index, buffer)
}



export default glBindBufferBase