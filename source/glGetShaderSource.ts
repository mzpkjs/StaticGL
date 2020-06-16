import gl from "./webglContext"



const glGetShaderSource = (shader: WebGLShader): string => {
    return gl.getShaderSource(shader) as string
}



export default glGetShaderSource