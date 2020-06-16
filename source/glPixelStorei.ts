import gl from "./webglContext"



const glPixelStorei = (pname: GLenum, param: GLint | GLboolean): void => {
    gl.pixelStorei(pname, param)
}



export default glPixelStorei