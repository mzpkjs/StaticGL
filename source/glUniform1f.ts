import gl from "./webglContext"



const glUniform1f = (location: WebGLUniformLocation | null, x: GLfloat): void => {
    gl.uniform1f(location, x)
}



export default glUniform1f