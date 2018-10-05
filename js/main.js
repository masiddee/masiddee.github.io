$(document).ready(function(){
  
  $('button').click(function(){
    console.log("Hello World");
    $.getJSON('js/data.json', function(data){
      // console.log(data);
      $.each(data, function(key,value){
        let rosterEntry = `
          <tr>
            <td>${value.firstName}</td>
            <td>${value.email}</td>
            <td><input type="checkbox" value="present"></td>
          </tr>
        `
        $('tbody').append(rosterEntry);
      })
    })
  });

})