import gl from "./webglContext"



const glColorMask = (red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void => {
    gl.colorMask(red, green, blue, alpha)
}



export default glColorMask