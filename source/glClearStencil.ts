import gl from "./webglContext"



const glClearStencil = (s: GLint): void => {
    gl.clearStencil(s)
}



export default glClearStencil