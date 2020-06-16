import gl from "./webglContext"



const glVertexAttribDivisor = (index: GLuint, divisor: GLuint): void => {
    (gl as WebGL2RenderingContext).vertexAttribDivisor(index, divisor)
}



export default glVertexAttribDivisor