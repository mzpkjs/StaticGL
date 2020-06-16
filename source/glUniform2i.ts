import gl  from "./webglContext"



const glUniform2i = (location: WebGLUniformLocation | null, x: GLint, y: GLint): void => {
    gl.uniform2i(location, x, y)
}



export default glUniform2i