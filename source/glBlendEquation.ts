import gl from "./webglContext"



const glBlendEquation = (mode: GLenum): void => {
    gl.blendEquation(mode)
}



export default glBlendEquation