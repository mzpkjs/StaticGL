import gl from "./webglContext"



const glCreateSampler = (): WebGLSampler => {
    return (gl as WebGL2RenderingContext).createSampler() as WebGLSampler
}



export default glCreateSampler