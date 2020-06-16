import gl from "./webglContext"



const glClearColor = (red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void => {
    gl.clearColor(red, green, blue, alpha)
}



export default glClearColor