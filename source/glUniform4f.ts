import gl  from "./webglContext"



const glUniform4f = (location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void => {
    gl.uniform4f(location, x, y, z, w)
}



export default glUniform4f