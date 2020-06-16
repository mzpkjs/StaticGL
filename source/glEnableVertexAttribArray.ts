import gl from "./webglContext"



const glEnableVertexAttribArray = (index: GLuint): void => {
    (gl as WebGL2RenderingContext).enableVertexAttribArray(index)
}



export default glEnableVertexAttribArray