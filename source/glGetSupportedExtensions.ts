import gl from "./webglContext"



const glGetSupportedExtensions = (): string[] => {
    return gl.getSupportedExtensions() as string[]
}



export default glGetSupportedExtensions