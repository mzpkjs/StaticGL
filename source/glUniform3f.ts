import gl  from "./webglContext"



const glUniform3f = (location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat): void => {
    gl.uniform3f(location, x, y, z)
}



export default glUniform3f