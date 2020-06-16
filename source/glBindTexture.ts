import gl from "./webglContext"



const glBindTexture = (target: GLenum, texture: WebGLTexture | null): void => {
    gl.bindTexture(target, texture)
}



export default glBindTexture