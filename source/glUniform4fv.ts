import gl  from "./webglContext"



type WebGLVariant = {
    (location: WebGLUniformLocation | null, v: Float32List): void
}

type WebGL2Variant = {
    (location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void
}


const glUniform4fv = (location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void => {
    gl.uniform4fv(location, data, srcOffset, srcLength)
}



export default glUniform4fv as WebGLVariant & WebGL2Variant