import gl from "./webglContext"



const glVertexAttribIPointer = (index: GLuint, size: GLint, type: GLenum, stride: GLsizei, offset: GLintptr): void => {
    (gl as WebGL2RenderingContext).vertexAttribIPointer(index, size, type, stride, offset)
}



export default glVertexAttribIPointer