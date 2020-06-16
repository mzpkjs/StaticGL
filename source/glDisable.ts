import gl from "./webglContext"



const glDisable = (cap: GLenum): void => {
    gl.disable(cap)
}



export default glDisable