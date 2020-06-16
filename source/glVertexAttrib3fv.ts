import gl from "./webglContext"



const glVertexAttrib3fv = (index: GLuint, values: Float32List): void => {
    gl.vertexAttrib3fv(index, values)
}



export default glVertexAttrib3fv