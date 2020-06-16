import gl from "./webglContext"



const glCompileShader = (shader: WebGLShader): void => {
    gl.compileShader(shader)
}



export default glCompileShader