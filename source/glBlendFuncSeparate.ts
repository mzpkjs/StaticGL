import gl from "./webglContext"



const glBlendFuncSeparate = (srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void => {
    gl.blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha)
}



export default glBlendFuncSeparate