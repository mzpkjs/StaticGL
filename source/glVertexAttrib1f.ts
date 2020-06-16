import gl from "./webglContext"



const glVertexAttrib1f = (index: GLuint, x: GLfloat): void => {
    gl.vertexAttrib1f(index, x)
}



export default glVertexAttrib1f