import gl from "./webglContext"



const glClearBufferfi = (buffer: GLenum, drawbuffer: GLint, depth: GLfloat, stencil: GLint): void => {
    (gl as WebGL2RenderingContext).clearBufferfi(buffer, drawbuffer, depth, stencil)
}



export default glClearBufferfi