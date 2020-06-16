import gl from "./webglContext"



const glVertexAttribPointer = (index: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): never => {
    gl.vertexAttribPointer(index, size, type, normalized, stride, offset)
}



export default glVertexAttribPointer