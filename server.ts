import coder from './src/html/coder.html'
import composer from './src/html/composer.html'
import index from './src/html/index.html'

const server = Bun.serve({
	port: 3001,
	development: !process.env.NODE_ENV,
	routes: {
		'/': index,
		'/coder': coder,
		'/composer': composer,
		'/code/:type/:file': async (req) =>
			new Response(
				await Bun.file(`./out/code/${req.params.type}/${req.params.file}`).text()
			),
		'/assets/*': {dir: './assets'},
		'/lib/*': {dir: './lib'}
	}
})

console.log(`Listening on ${server.url}`)
