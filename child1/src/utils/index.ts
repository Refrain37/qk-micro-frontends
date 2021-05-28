// throttle_debounce
export function throttle(fn: Function, wait: number) {
  let timer: any = null,
    previous: number = 0

  return function(...args: any) {
    const now: number = +new Date()
    const _self: any = this
    if (now - previous < wait) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        fn.call(_self, ...args)
        previous = now
      }, wait)
    } else {
      fn.call(_self, ...args)
      previous = now
    }
  }
}
