import gl from "./webglContext"



const glGetError = (): GLenum => {
    return gl.getError()
}



export default glGetError