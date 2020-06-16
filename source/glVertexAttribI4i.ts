import gl from "./webglContext"



const glVertexAttribI4i = (index: GLuint, x: GLint, y: GLint, z: GLint, w: GLint): void => {
    (gl as WebGL2RenderingContext).vertexAttribI4i(index, x, y, z, w)
}



export default glVertexAttribI4i