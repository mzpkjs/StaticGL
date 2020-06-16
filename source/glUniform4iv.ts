import gl  from "./webglContext"



type WebGLVariant = {
    (location: WebGLUniformLocation | null, v: Int32List): void
}

type WebGL2Variant = {
    (location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void
}


const glUniform4iv = (location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void => {
    gl.uniform4iv(location, data, srcOffset, srcLength)
}



export default glUniform4iv as WebGLVariant & WebGL2Variant