function Delete(e) {
    let strName = e.id;
    $('#'+strName).closest('tr').remove();
    $.ajax({
        method: "delete",
        datatype: "json",
        url: "/employee-manage",
        data: {
            username: strName,
            type: "delete"
        },
        success: function(data) {
            console.log(data);
        }
    })
}