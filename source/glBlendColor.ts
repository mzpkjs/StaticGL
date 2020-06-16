import gl from "./webglContext"



const glBlendColor = (red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void => {
    gl.blendColor(red, green, blue, alpha)
}



export default glBlendColor