import gl from "./webglContext"



const glVertexAttribI4ui = (index: GLuint, x: GLuint, y: GLuint, z: GLuint, w: GLuint): void => {
    (gl as WebGL2RenderingContext).vertexAttribI4ui(index, x, y, z, w)
}



export default glVertexAttribI4ui