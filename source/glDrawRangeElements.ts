import gl from "./webglContext"



const glDrawRangeElements = (mode: GLenum, start: GLuint, end: GLuint, count: GLsizei, type: GLenum, offset: GLintptr): void => {
    (gl as WebGL2RenderingContext).drawRangeElements(mode, start, end, count, type, offset)
}



export default glDrawRangeElements