
async function fetchAndLogPage() {
  const url = "https://sheets.googleapis.com/v4/spreadsheets/1RamZbmilTQZePFSq3OruCsjW2sf3KilOg05JdWZjfm0/values/Sheet1?alt=json&key=AIzaSyD02By87q_dkNk6VPNSOPBpDhPQJJOqSmk";
  let page; // Declare 'page' in the outer scope
  async function fetchData() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      page = json.values[0][0]; // Assign value to 'page'
      console.log(page)
      return page;
    } catch (error) {
      console.error('Error with fetch operation:', error.message);
    }
  }
  return await fetchData();
   
}

//fetchAndLogPage();