import gl from "./webglContext"



const glGetVertexAttrib = (index: GLuint, pname: GLenum): any => {
    return gl.getVertexAttrib(index, pname) as any
}



export default glGetVertexAttrib