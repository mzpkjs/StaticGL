import gl from "./webglContext"



const glBlendFunc = (sfactor: GLenum, dfactor: GLenum): void => {
    gl.blendFunc(sfactor, dfactor)
}



export default glBlendFunc