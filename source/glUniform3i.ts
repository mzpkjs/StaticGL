import gl  from "./webglContext"



const glUniform3i = (location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint): void => {
    gl.uniform3i(location, x, y, z)
}



export default glUniform3i