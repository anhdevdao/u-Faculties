var modal = document.getElementById('modal-wrapper');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
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