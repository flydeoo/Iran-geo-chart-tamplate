function doGet(e) {

    let js = json_generator();
    return ContentService.createTextOutput(js).setMimeType(ContentService.MimeType.JSON);
  
  }
  
  function json_generator(){
  
    arr = {cols:[{"label":"Provinces","type":"string"},{"label":"pop","type":"number"}],rows: []};
    arr['rows'].push({
           "c":[
              {
                 "v":' IR-07 ',
                 "f":'tehran'
              },
              {
                 "v": 300,
                 "f":null
              }
           ]
        });
    
    
  
    
    let res_json = JSON.stringify(arr);
  
  
  return res_json;
  
  }