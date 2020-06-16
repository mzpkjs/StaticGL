import gl from "./webglContext"



const glFrontFace = (mode: GLenum): void => {
    gl.frontFace(mode)
}



export default glFrontFace