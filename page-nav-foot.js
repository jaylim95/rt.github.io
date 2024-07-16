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
        console.log(json)
        return page;
      } catch (error) {
        console.error('Error with fetch operation:', error.message);
      }
    }
    return await fetchData();
     
  }

document.querySelectorAll('.sidebar-link').forEach(link => {
    elClone = link.cloneNode(true);
    link.parentNode.replaceChild(elClone, link);
})

document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', async function(event) {
      //event.preventDefault();
      const page1 = await fetchAndLogPage(); // Await the result of fetchAndLogPage
      const href = link.getAttribute('href');
      const sixthCharFromBack = parseInt(href[href.length - 6]);
      const page = parseInt(page1)
      console.log(typeof page, page);
      console.log(typeof sixthCharFromBack, sixthCharFromBack );
      console.log(sixthCharFromBack > page)
      if (sixthCharFromBack > page) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        console.log(page);
        console.log(`Link to ${href} is disabled because page (${page}) is less than ${sixthCharFromBack}`);
        return false;
      }
    });
  });