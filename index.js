$(document).ready(function(){
        function get_quote(){
        var url= "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
        $.getJSON(url, function(data){
            $(".quote").html('" '+data.quoteText+' "');
            $(".author").html(" -- "+data.quoteAuthor+" -- ");
            $(".twitter_btn").on("click", function(){
                window.open("https://twitter.com/intent/tweet?text=" +data.quoteText+"author :   "+data.quoteAuthor);
            })
        })
    }
$(".new_quote").on("click", function(){
    get_quote();
})
})