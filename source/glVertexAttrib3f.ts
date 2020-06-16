import gl from "./webglContext"



const glVertexAttrib3f = (index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void => {
    gl.vertexAttrib3f(index, x, y, z)
}



export default glVertexAttrib3f