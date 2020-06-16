import gl from "./webglContext"



const glClearBufferuiv = (buffer: GLenum, drawbuffer: GLint, values: Int32List, srcOffset?: GLuint): void => {
    (gl as WebGL2RenderingContext).clearBufferiv(buffer, drawbuffer, values, srcOffset)
}



export default glClearBufferuiv