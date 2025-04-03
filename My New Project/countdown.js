$(function (){
    const endDate = new Date("2025-05-11T23:59:59").getTime();

    setInterval(function (){
        const now = Date.now();
        const timeLeft = endDate - now;

        //Expiration Handler
        if(timeLeft < 0){
            $("#countdown").text("EXPIRED");
            return;
        }

        //Formating Date
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        $("#countdown").text(`${days}d ${hours}h ${minutes}m ${seconds}s`)
    }, 1000);
});