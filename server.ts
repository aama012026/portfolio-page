import coder from './src/html/coder.html'
import composer from './src/html/composer.html'
import index from './src/html/index.html'

const server = Bun.serve({
	port: 3001,
	routes: {
		'/': index,
		'/coder': coder,
		'/composer': composer,
		'/code/*': {dir: './out/code'},
		'/assets/*': {dir: './assets'},
		'/lib/*': {dir: './lib'}
	}
})

console.log(`Listening on ${server.url}`)
