Here's the write-up!  That was a fun activity.

**1. Discuss your solution’s time complexity. What tradeoffs did you make?**
  - In my solution, I iterate through each data set once to read them.  
    - Then I iterate through each legislator, and each vote result for each of them.
    - Then I iterate through the votes to turn them into a map, so that I don't have to iterate every time I check and vote id in the next step
    - Finally, I iterate through each bill, and then each vote result for each of them
  - The sordid details above are unecessary; the ultimate complexity is O(n^2).  Not great at a large scale, but obviously serviceable for an exercise like this.
  - An O(n) solution would have been feasible:
    - Iterate through the votes data once to get a mapping of vote ids to bill ids (similar to what I actually did)
    - Iterate through the vote results once, keeping track of bill and legislator ids along the way and counting yeas and nays for each.
    - Iterate through the legislators and bills once to get the rest of the needed data for the output
  - In retrospect, this would have been not too tricky to implement, but hey, I'm finished now, so hindsight is 20/20.  I can obviously go back and rewrite it this way if wanted for the interview!

**2. How would you change your solution to account forfuture columns that might be requested, such as “Bill Voted On Date” or“Co-Sponsors”?**
  - I used a decent amount of javascript object destructuring in this, so I'm pretty sure it wouldn't break even if new collumns were added.

**3. How would you change your solution if instead ofreceiving CSVs of data, you were given a list of legislators or bills that you should generate a CSV for?**
  - Not sure what you mean by "list" if not a programatic object.  Obviously if you mean like a JSON input from an API request or something, I wouldn't really need to change the solution other than removing the CSV parsing step.  If you mean like some other file format besides CSV, then we would obviously need a new parser.

**4. How long did you spend working on the assignment?**
  - About 1.5 hours on the code, 20 minutes on cleaning it up and adding comments, 10 minutes on this write-up!


Instructions on how to run are in the README!