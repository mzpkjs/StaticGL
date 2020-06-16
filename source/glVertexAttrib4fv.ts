import gl from "./webglContext"



const glVertexAttrib4fv = (index: GLuint, values: Float32List): void => {
    gl.vertexAttrib4fv(index, values)
}



export default glVertexAttrib4fv