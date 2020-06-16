import gl from "./webglContext"



const glDeleteShader = (shader: WebGLShader | null): void => {
    gl.deleteShader(shader)
}



export default glDeleteShader