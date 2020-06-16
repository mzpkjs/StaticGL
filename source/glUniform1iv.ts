import gl  from "./webglContext"



type WebGLVariant = {
    (location: WebGLUniformLocation | null, v: Int32List): void
}

type WebGL2Variant = {
    (location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void
}


const glUniform1iv = (location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void => {
    gl.uniform1iv(location, data, srcOffset, srcLength)
}



export default glUniform1iv as WebGLVariant & WebGL2Variant