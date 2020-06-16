import gl from "./webglContext"



const glViewport = (x: GLint, y: GLint, width: GLsizei, height: GLsizei): void => {
    gl.viewport(x, y, width, height)
}



export default glViewport