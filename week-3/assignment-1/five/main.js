function createSelectBox(startYear, endYear) {
   document.write(`<select>`);
   for( let i = startYear; i <= endYear; i++) {
    document.write(`<Option value="${i}">${i}</Option>`);
   }
   document.write(`</select>`);
  }
  createSelectBox(2000, 2021);