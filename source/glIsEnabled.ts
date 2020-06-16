import gl from "./webglContext"



const glIsEnabled = (cap: GLenum): GLboolean => {
    return gl.isEnabled(cap)
}



export default glIsEnabled
