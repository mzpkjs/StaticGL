import gl from "./webglContext"



const glTexParameteri = (target: GLenum, pname: GLenum, param: GLint): void => {
    gl.texParameteri(target, pname, param)
}



export default glTexParameteri