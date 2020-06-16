import gl from "./webglContext"



const glIsShader = (shader: WebGLShader | null): GLboolean => {
    return gl.isShader(shader)
}



export default glIsShader