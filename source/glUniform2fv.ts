import gl  from "./webglContext"



type WebGLVariant = {
    (location: WebGLUniformLocation | null, v: Float32List): void
}

type WebGL2Variant = {
    (location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void
}


const glUniform2fv = (location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void => {
    gl.uniform2fv(location, data, srcOffset, srcLength)
}



export default glUniform2fv as WebGLVariant & WebGL2Variant