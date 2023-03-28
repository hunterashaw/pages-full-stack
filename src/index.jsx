import { render } from 'preact'
import { useEffect, useState } from 'preact/hooks'

window.addEventListener('DOMContentLoaded', () => {
    render(<span>Hello world.</span>, document.getElementById('root'))
})
