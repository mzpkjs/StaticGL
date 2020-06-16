import gl from "./webglContext"



const glVertexAttrib2fv = (index: GLuint, values: Float32List): void => {
    gl.vertexAttrib2fv(index, values)
}



export default glVertexAttrib2fv