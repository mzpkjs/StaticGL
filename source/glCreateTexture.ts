import gl from "./webglContext"



const glCreateTexture = (): WebGLTexture => {
    return gl.createTexture() as WebGLTexture
}



export default glCreateTexture