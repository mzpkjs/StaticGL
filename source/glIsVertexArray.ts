import gl from "./webglContext"



const glIsVertexArray = (vertexArray: WebGLVertexArrayObject | null): GLboolean => {
    return (gl as WebGL2RenderingContext).isVertexArray(vertexArray)
}



export default glIsVertexArray