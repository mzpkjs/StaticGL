import gl from "./webglContext"



const glGetTexParameter = (target: GLenum, pname: GLenum): any => {
    return gl.getTexParameter(target, pname) as any
}



export default glGetTexParameter