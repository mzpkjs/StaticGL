import gl  from "./webglContext"



const glUniformMatrix2fv = (
    location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List,
    srcOffset?: GLuint, srcLength?: GLuint
): void => {
    gl.uniformMatrix2fv(location, transpose, data, srcOffset, srcLength)
}



export default glUniformMatrix2fv