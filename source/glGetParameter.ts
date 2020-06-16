import gl from "./webglContext"



const glGetParameter = (pname: GLenum): any => {
    return gl.getParameter(pname) as any
}



export default glGetParameter