import gl from "./webglContext"



const glSampleCoverage = (value: GLclampf, invert: GLboolean): void => {
    gl.sampleCoverage(value, invert)
}



export default glSampleCoverage