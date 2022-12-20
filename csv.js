const parse = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { create } = require('domain');
const fs = require('fs');

/**
 * Most of this file is just copypasta boilerplate from the csv-parser and
 * csv-writer libraries.
 */

/**
 * Parses a csv file into json
 * @param {String} fileName The path of the file to parse
 * @returns JSON array parsed from CSV
 */
async function parseCsv(fileName) {
	const output = []
	const stream = fs.createReadStream(fileName)
		.pipe(parse())
		.on('data', data => output.push(data))
		
	await new Promise((resolve, reject) => {
		stream.on('end', () => resolve(stream.read()))
	})
	return output
}

/**
 * Writes a csv file based on json input and path
 * @param {String} fileName The path of the file to write
 * @param {Array.<Object>} jsonList The path of the file to parse
 */
async function writeOutputToCsv(fileName, jsonList) {
  const csvWriter = createCsvWriter({
    path: fileName,
    header: Object.keys(jsonList[0]).map(key => {
      return {
        id: key,
        title: key
      }
    })
  })

  await csvWriter.writeRecords(jsonList)
}

exports.parseCsv = parseCsv
exports.writeOutputToCsv = writeOutputToCsv