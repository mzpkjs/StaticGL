import gl from "./webglContext"



const glGetShaderInfoLog = (shader: WebGLShader): string => {
    return gl.getShaderInfoLog(shader) as string
}



export default glGetShaderInfoLog