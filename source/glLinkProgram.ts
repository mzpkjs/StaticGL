import gl from "./webglContext"



const glLinkProgram = (program: WebGLProgram): void => {
    gl.linkProgram(program)
}



export default glLinkProgram