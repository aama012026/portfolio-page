import index from './src/html/index.html'
import coder from './src/html/coder.html'
import composer from './src/html/composer.html'

const server = Bun.serve({
	routes: {
		'/': index,
		'/coder': coder,
		'/composer': composer,
		'/code/:type/:file': async req => new Response(
			await Bun.file(`./out/code/${req.params.type}/${req.params.file}`).text()
		),
		'/assets/:file': async req => new Response(
			await Bun.file(`./assets/${req.params.file}`).text()
		)
	}
})

console.log(`Listening on ${server.url}`)