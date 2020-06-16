import gl from "./webglContext"



const glGetVertexAttribOffset = (index: GLuint, pname: GLenum): GLintptr => {
    return gl.getVertexAttribOffset(index, pname)
}



export default glGetVertexAttribOffset