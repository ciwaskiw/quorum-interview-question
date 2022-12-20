
/**
 * Computes deliverable 1 based on the legislators and voteResults data sets
 * @param {Array.<Object>} legislators 
 * @param {Array.<Object>} voteResults 
 * @returns An array of objects similar to the legislators list but with
 *  num_supported_bills and num_opposed_bills fields added
 */
function computerDeliverable1(legislators, voteResults) {
	//Iterate over all the legislators
  return legislators.map(legislator => {
		let yeaCount = 0
		let nayCount = 0

    //Check each result to see if it was a yea or nay for this legislator and count them
    //Assumption is made that each legislator can only vote for a bill once!
		voteResults.forEach(({ legislator_id, vote_type }) => {
			if (legislator_id == legislator.id) {
				if (vote_type == 1) {
					yeaCount++;
				} else if (vote_type == 2) {
					nayCount++;
				}
			}
		})

    //Return the original legislator plus the new fields
		return {
			...legislator,
			num_supported_bills: yeaCount,
			num_opposed_bills: nayCount
		}
	})
}

/**
 * Computes deliverable 2 based on the bills, voteResults, and votes data sets
 * @param {Array.<Object>} bills
 * @param {Array.<Object>} voteResults 
 * @param {Array.<Object>} votes
 * @returns An array of objects similar to the bills list but with
 *  supporter_count and opposer_count fields added
 */
function computerDeliverable2(bills, voteResults, votes) {
	//Convert votes into a map so that it is easier to compute deliverable 2
	const votesMap = votes.reduce(function(acc, { id, bill_id }) {
		acc[id] = bill_id;
		return acc;
	}, {});

  //Iterate over each bill
	return bills.map(bill => {
		let supporters = 0
		let opposers = 0

    //Check each result to see if it was a yea or nay for this bill and count them
    //Assumption is made that each legislator can only vote for a bill once!
		voteResults.forEach(({ vote_id, vote_type }) => {
			if (votesMap[vote_id] == bill.id) {
				if (vote_type == 1) {
					supporters++;
				} else if (vote_type == 2) {
					opposers++;
				}
			}
		})

    //Return the original bill plus the new fields
		return {
			...bill,
			supporter_count: supporters,
			opposer_count: opposers
		}
	})
}

exports.computerDeliverable1 = computerDeliverable1
exports.computerDeliverable2 = computerDeliverable2