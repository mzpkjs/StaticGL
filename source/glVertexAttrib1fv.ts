import gl from "./webglContext"



const glVertexAttrib1fv = (index: GLuint, values: Float32List): void => {
    gl.vertexAttrib1fv(index, values)
}



export default glVertexAttrib1fv