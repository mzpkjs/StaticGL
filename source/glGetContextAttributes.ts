import gl from "./webglContext"



const glGetContextAttributes = (): WebGLContextAttributes => {
    return gl.getContextAttributes() as WebGLContextAttributes
}



export default glGetContextAttributes