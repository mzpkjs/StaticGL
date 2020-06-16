import gl from "./webglContext"



const glVertexAttribI4iv = (index: GLuint, values: Int32List): void => {
    (gl as WebGL2RenderingContext).vertexAttribI4iv(index, values)
}



export default glVertexAttribI4iv