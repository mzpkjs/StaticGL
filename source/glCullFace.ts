import gl from "./webglContext"



const glCullFace = (mode: GLenum): void => {
    gl.cullFace(mode)
}



export default glCullFace