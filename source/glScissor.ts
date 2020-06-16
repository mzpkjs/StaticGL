import gl from "./webglContext"



const glScissor = (x: GLint, y: GLint, width: GLsizei, height: GLsizei): void => {
    gl.scissor(x, y, width, height)
}



export default glScissor