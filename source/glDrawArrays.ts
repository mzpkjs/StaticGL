import gl from "./webglContext"



const glDrawArrays = (mode: GLenum, first: GLint, count: GLsizei): void => {
    gl.drawArrays(mode, first, count)
}



export default glDrawArrays