import gl from "./webglContext"



const glVertexAttribI4uiv = (index: GLuint, values: Uint32List): void => {
    (gl as WebGL2RenderingContext).vertexAttribI4uiv(index, values)
}



export default glVertexAttribI4uiv