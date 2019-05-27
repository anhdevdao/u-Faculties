function addByExcel() {
    var input = document.getElementById('input-excel').value;
    console.log(input);
}

function Delete(e) {
    let strName = e.id;
    let n = strName.indexOf("-");
    let username = strName.substring(n+1, strName.length);
    $('#'+strName).closest('tr').remove();
    $.ajax({
        method: "delete",
        datatype: "json",
        url: "/employee-manage",
        data: {
            username: username,
            type: "delete"
        },
        success: function(data) {
            console.log(data);
        }
    })
}