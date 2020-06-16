import gl from "./webglContext"



const glDrawElementsInstanced = (mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, instanceCount: GLsizei): void => {
    (gl as WebGL2RenderingContext).drawElementsInstanced(mode, count, type, offset, instanceCount)
}



export default glDrawElementsInstanced