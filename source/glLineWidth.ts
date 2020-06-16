import gl from "./webglContext"



const glLineWidth = (width: GLfloat): void => {
    gl.lineWidth(width)
}



export default glLineWidth