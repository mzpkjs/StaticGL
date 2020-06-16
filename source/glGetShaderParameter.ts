import gl from "./webglContext"



const glGetShaderParameter = (shader: WebGLShader, pname: GLenum): any => {
    return gl.getShaderParameter(shader, pname) as any
}



export default glGetShaderParameter