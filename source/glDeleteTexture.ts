import gl from "./webglContext"



const glDeleteTexture = (texture: WebGLTexture | null): void => {
    gl.deleteTexture(texture)
}



export default glDeleteTexture