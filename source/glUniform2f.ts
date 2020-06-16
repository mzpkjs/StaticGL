import gl  from "./webglContext"



const glUniform2f = (location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat): void => {
    gl.uniform2f(location, x, y)
}



export default glUniform2f