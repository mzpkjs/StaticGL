import gl from "./webglContext"



const glGenerateMipmap = (target: GLenum): void => {
    gl.generateMipmap(target)
}



export default glGenerateMipmap