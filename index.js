const { parseCsv, writeOutputToCsv } = require('./csv')
const { computerDeliverable1, computerDeliverable2 } = require('./util')

/**
 * Solve the coding challenge by reading the input csv files and writing the
 * output csv files.
 */
async function generateOutput() {
	//Read all files
	const legislators 	= await parseCsv('input/legislators.csv')
	const bills 				= await parseCsv('input/bills.csv')
	const votes 				=	await parseCsv('input/votes.csv')
	const voteResults 	=	await parseCsv('input/vote_results.csv')
		
	//Compute deliverable 1
	const deliverable1 = computerDeliverable1(legislators, voteResults)

	//Computer deliverable 2
	const deliverable2 = computerDeliverable2(bills, voteResults, votes)

	//Write deliverables to disk
	writeOutputToCsv("output/legislators-support-oppose-count.csv", deliverable1)
	writeOutputToCsv("output/bills-supporters-opposers-count.csv", deliverable2)

	console.log('Output generated!')
}

generateOutput()