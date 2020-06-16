const unset = new Proxy({ } as WebGLRenderingContext | WebGL2RenderingContext, {
    get() {
        throw new TypeError("WebGL context has not been set.\n\t\tUse \"webglMakeCurrentContext\" function first to set a proper context.")
    }
})

let webglContext: WebGLRenderingContext | WebGL2RenderingContext = unset

export function __secretly_set_current_context__(context: WebGLRenderingContext | WebGL2RenderingContext | null): boolean {
    if (context == null) {
        webglContext = unset
    } else {
        webglContext = context
    }
    return true
}


export const isWebGL2 = (context: WebGLRenderingContext | WebGL2RenderingContext): context is WebGL2RenderingContext => {
    return !!(context as WebGL2RenderingContext).fenceSync
}





export { webglContext as default }