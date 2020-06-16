import gl from "./webglContext"



const glBlendEquationSeparate = (modeRGB: GLenum, modeAlpha: GLenum): void => {
    gl.blendEquationSeparate(modeRGB, modeAlpha)
}



export default glBlendEquationSeparate