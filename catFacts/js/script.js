$(function (){
    $("#factSubmit").click(function(e) {
        let factNumber = $("#factCount").val();
        var factUrl = 'https://catfact.ninja/facts?limit='+factNumber+'&max_length=140';
        $.ajax({
            type: 'GET',
            url: factUrl,
            success: function(data){
                let factArray = data.data;            
                var i = 0;
                var text = "<ul>"; 
                for (i = 0; i < factArray.length; i++){
                    text += "<li>"+factArray[i].fact + "</li><br>";
                }
                text+= "</ul>";         
                $("#factBox").html(text);
            }            
        })
        e.preventDefault();
    })
})