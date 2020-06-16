import gl from "./webglContext"



const glVertexAttrib2f = (index: GLuint, x: GLfloat, y: GLfloat): void => {
    gl.vertexAttrib2f(index, x, y)
}



export default glVertexAttrib2f