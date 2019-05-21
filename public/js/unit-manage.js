function Add() {
    
}

function Delete(e) {
    let strID = e.id;
    $('#'+strID).closest('tr').remove();
    $.ajax({
        method: "post",
        datatype: "json",
        url: "/manage",
        data: {
            id: strID,
            type: "delete"
        },
        success: function(data) {
            console.log(data);
        }
    })
}