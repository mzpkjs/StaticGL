import gl  from "./webglContext"



type WebGLVariant = {
    (location: WebGLUniformLocation | null, v: Int32List): void
}

type WebGL2Variant = {
    (location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void
}


const glUniform3iv = (location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void => {
    gl.uniform3iv(location, data, srcOffset, srcLength)
}



export default glUniform3iv as WebGLVariant & WebGL2Variant