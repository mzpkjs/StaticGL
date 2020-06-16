import gl  from "./webglContext"



const glUniform2iv = (location: WebGLUniformLocation | null, v: Int32List): void => {
    gl.uniform2iv(location, v)
}


export default glUniform2iv