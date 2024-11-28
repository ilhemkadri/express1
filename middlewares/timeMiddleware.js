function timeMiddleware(req,res,next){
    const currentDate=new Date ()
    const currentDay=currentDate.getDay();
    const currentHour=currentDate.getHours();
    if (currentDay>=1 && currentDate<=5 && currentHour>=9 && currentHour<=17)
        next()
    else 
    res.send("we're closed");
}

module.exports=timeMiddleware; 