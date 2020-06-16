import gl from "./webglContext"



const glDrawElements = (mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void => {
    gl.drawElements(mode, count, type, offset)
}



export default glDrawElements