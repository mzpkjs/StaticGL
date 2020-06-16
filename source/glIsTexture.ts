import gl from "./webglContext"



const glIsTexture = (texture: WebGLTexture | null): GLboolean => {
    return gl.isTexture(texture)
}



export default glIsTexture