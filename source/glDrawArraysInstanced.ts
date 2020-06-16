import gl from "./webglContext"



const glDrawArraysInstanced = (mode: GLenum, first: GLint, count: GLsizei, instanceCount: GLsizei): void => {
    (gl as WebGL2RenderingContext).drawArraysInstanced(mode, first, count, instanceCount)
}



export default glDrawArraysInstanced