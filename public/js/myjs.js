var modal = document.getElementById('modal-wrapper');
var excel = document.getElementById('excel-wrapper');
var deleteWrap = document.getElementById('delete-wrapper');
var editWrap = document.getElementById('edit-wrapper');
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == excel) {
      excel.style.display = "none";
    } else if (event.target == deleteWrap) {
      deleteWrap.style.display = "none";
    } else if (event.target == editWrap) {
      editWrap.style.display = "none";
    }
}

$(document).ready(function(){
    $("#myInput").change(function() {
      var value = $(this).val();
      $("#myTable tr").each(function() {
          if ($(this).text().includes(value)) {
            $(this).show();
          } else $(this).hide();
      });
    });

    $("#deg-select").change(function() {
      var value = $(this).val();
      $("#myTable tr").each(function() {
          if ($(this).text().includes(value)) {
            $(this).show();
          } else $(this).hide();
      });
    });

    $("#type-select").change(function() {
      var value = $(this).val();
      $("#myTable tr").each(function() {
          if ($(this).text().includes(value)) {
            $(this).show();
          } else $(this).hide();
      });
    });
});

// $("#input-excel").change(function(e) {
//   var reader = new FileReader();
//   reader.readAsArrayBuffer(e.target.files[0]);

//   reader.onload = function(e) {
//     var data = new Uint8Array(reader.result);
//     var wb = XLSX.read(data, {type: 'array'});
//     var htmlstr = XlSX 
//   }
// })