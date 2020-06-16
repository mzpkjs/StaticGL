import gl from "./webglContext"



const glCopyTexImage2D = (
    target: GLenum, level: GLint, internalformat: GLenum,
    x: GLint, y: GLint, width: GLsizei, height: GLsizei, border: GLint
): void => {
    gl.copyTexImage2D(target, level, internalformat, x, y, width, height, border)
}



export default glCopyTexImage2D