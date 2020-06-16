import gl from "./webglContext"



const glHint = (target: GLenum, mode: GLenum): void => {
    gl.hint(target, mode)
}



export default glHint