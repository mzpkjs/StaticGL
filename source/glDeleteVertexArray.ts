import gl from "./webglContext"



const glDeleteVertexArray = (vertexArray: WebGLVertexArrayObject | null): void => {
    (gl as WebGL2RenderingContext).deleteVertexArray(vertexArray)
}



export default glDeleteVertexArray