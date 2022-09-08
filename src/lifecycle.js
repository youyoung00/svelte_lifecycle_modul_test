import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte'
import { writable } from 'svelte/store'

export function lifecycle(){
    onMount(() => {
        console.log('Mounted?')
    })

    onDestroy(() => {
        console.log('Before destroy?')
    })

    beforeUpdate(() => {
        console.log('Before update?')
    })

    afterUpdate(() => {
        console.log('After update?')
    })
}

export function delayRender(delay = 3000){ //ms
    let render = writable(false)
    onMount(() => {
        setTimeout(() => {
        //    $render = true
            console.log(render) // set, update, subscribe
            render.set(true)
        }, delay)
    })
    return render
}