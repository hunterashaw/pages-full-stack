import { EventContext } from '@cloudflare/workers-types'
import HelloWorld from '../src/api/hello'

export function onRequest(context: EventContext<any, any, any>) {
    return HelloWorld(context)
}
