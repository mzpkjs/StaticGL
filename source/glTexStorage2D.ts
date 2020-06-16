import gl from "./webglContext"



const glTexStorage2D = (target: GLenum, levels: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei): void => {
    (gl as WebGL2RenderingContext).texStorage2D(target, levels, internalformat, width, height)
}



export default glTexStorage2D