import gl from "./webglContext"



const glDisableVertexAttribArray = (index: GLuint): void => {
    (gl as WebGL2RenderingContext).disableVertexAttribArray(index)
}



export default glDisableVertexAttribArray