import gl from "./webglContext"



const glCreateVertexArray = (): WebGLVertexArrayObject => {
    return (gl as WebGL2RenderingContext).createVertexArray() as WebGLVertexArrayObject
}



export default glCreateVertexArray