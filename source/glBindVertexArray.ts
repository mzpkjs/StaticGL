import gl from "./webglContext"



const glBindVertexArray = (array: WebGLVertexArrayObject | null): void => {
    (gl as WebGL2RenderingContext).bindVertexArray(array)
}



export default glBindVertexArray