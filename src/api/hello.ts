import { EventContext } from '@cloudflare/workers-types'

export default function HelloWorld(context: EventContext<any, any, any>) {
    return new Response('Hello, world!')
}
