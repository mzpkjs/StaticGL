import gl from "./webglContext"



const glTexParameterf = (target: GLenum, pname: GLenum, param: GLfloat): void => {
    gl.texParameterf(target, pname, param)
}



export default glTexParameterf