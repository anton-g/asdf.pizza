import fs from 'fs'

// TODO fixa ta bort " från CSV

const parseTranscriptionCsv = (csvPath) => {
  const csv = fs.readFileSync(csvPath, 'utf8')
  const lines = csv.split('\n').slice(1)
  const result = []
  for (const line of lines) {
    const [start, end, text] = line.split(';')
    const timestamp = '00:' + start.split(',')[0]
    result.push({ speaker: null, timestamp, line: text })
  }

  if (!fs.existsSync('output')) fs.mkdirSync('output')

  const outputFilename = csvPath.split('/').pop().replace('.csv', '.json')
  fs.writeFileSync(`output/${outputFilename}`, JSON.stringify(result, null, 2))

  console.log(`Parsed ${csvPath} and wrote to output/${outputFilename}`)
}

const inputFolder = 'input'
const csvFiles = fs.readdirSync(inputFolder)
for (const csvFile of csvFiles) {
  parseTranscriptionCsv(`${inputFolder}/${csvFile}`)
}
console.log('Done!')
