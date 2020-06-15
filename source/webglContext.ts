const unset = new Proxy({ } as WebGLRenderingContext | WebGL2RenderingContext, {
    get() {
        throw new TypeError("WebGL context has not been set.\n\t\tUse \"webglMakeCurrentContext\" function first to set a proper context.")
    }
})

let webglContext = unset

export function __secretly_set_current_context__(context: WebGLRenderingContext | WebGL2RenderingContext | null): boolean {
    if (context == null) {
        webglContext = unset
    } else {
        webglContext = context
    }
    return true
}



export { webglContext as default }