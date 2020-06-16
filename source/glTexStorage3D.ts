import gl from "./webglContext"



const glTexStorage3D = (target: GLenum, levels: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei): void => {
    (gl as WebGL2RenderingContext).texStorage3D(target, levels, internalformat, width, height, depth)
}



export default glTexStorage3D