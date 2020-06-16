import gl  from "./webglContext"



const glUniform4i = (location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint, w: GLint): void => {
    gl.uniform4i(location, x, y, z, w)
}



export default glUniform4i