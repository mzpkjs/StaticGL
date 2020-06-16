import gl from "./webglContext"



const glShaderSource = (shader: WebGLShader, source: string): void => {
    gl.shaderSource(shader, source)
}



export default glShaderSource