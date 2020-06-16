import gl from "./webglContext"



const glClearBufferfv = (buffer: GLenum, drawbuffer: GLint, values: Float32List, srcOffset?: GLuint): void => {
    (gl as WebGL2RenderingContext).clearBufferfv(buffer, drawbuffer, values, srcOffset)
}



export default glClearBufferfv