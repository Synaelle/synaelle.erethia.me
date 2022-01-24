function copyDiscord(){
    if (!navigator.clipboard){
        var discord = document.createElement("textarea");
        document.body.appendChild(discord);
        discord.value = "Synaelle#0001";
        discord.select();
        document.execCommand("copy");
        document.body.removeChild(discord);
        alert("Copied to clipboard!");
    }
    else{
        navigator.clipboard.writeText(discord).then(
            function(){
                alert("Copied to clipboard!");
            }   
        ).catch(
            function() {
                alert("Error, can't copy to clipboard.");
            }
        ) 
    }
    
}

document.querySelector("#copy").addEventListener("click", copyDiscord);