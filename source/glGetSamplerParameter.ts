import gl from "./webglContext"



const glGetSamplerParameter = (sampler: WebGLSampler, pname: GLenum): any => {
    return (gl as WebGL2RenderingContext).getSamplerParameter(sampler, pname)
}



export default glGetSamplerParameter