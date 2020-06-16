import gl  from "./webglContext"



const glUniform1i = (location: WebGLUniformLocation | null, x: GLint): void => {
    gl.uniform1i(location, x)
}



export default glUniform1i