const auth = function (req, res, next){
    
    if(req.query.password === "dwn4av"){
        next()
    } else{
        res.send("Usuario no autenticado.")
    }
}

export default auth;