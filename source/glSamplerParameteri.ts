import gl from "./webglContext"



const glSamplerParameteri = (sampler: WebGLSampler, pname: GLenum, param: GLint): void => {
    (gl as WebGL2RenderingContext).samplerParameteri(sampler, pname, param)
}



export default glSamplerParameteri