const SRC = './src'
const OUT = './out/code'

const PUBLIC_SRC_FILES: string[] = [
	'ts/web/coder.ts',
	'html/coder.html',
	'html/composer.html',
	'html/index.html',
	'css/stil.css'
] as const

PUBLIC_SRC_FILES.forEach(filePath => {
	const outPath = filePath.replace('ts/web', 'ts')
	Bun.write(`${OUT}/${outPath}`, Bun.file(`${SRC}/${filePath}`))
})