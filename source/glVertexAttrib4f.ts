import gl from "./webglContext"



const glVertexAttrib4f = (index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void => {
    gl.vertexAttrib4f(index, x, y, z, w)
}



export default glVertexAttrib4f