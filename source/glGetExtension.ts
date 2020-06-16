import gl from "./webglContext"



const glGetExtension = (extensionName: string): any => {
    return gl.getExtension(extensionName) as any
}



export default glGetExtension