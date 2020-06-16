import gl from "./webglContext"



const glGetShaderPrecisionFormat = (shadertype: GLenum, precisiontype: GLenum): WebGLShaderPrecisionFormat => {
    return gl.getShaderPrecisionFormat(shadertype, precisiontype) as WebGLShaderPrecisionFormat
}



export default glGetShaderPrecisionFormat