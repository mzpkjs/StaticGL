import gl from "./webglContext"



const glEnable = (cap: GLenum): void => {
    gl.enable(cap)
}



export default glEnable