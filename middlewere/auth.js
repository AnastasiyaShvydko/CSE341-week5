module.exports = {
    ensureAuth : function (req, res, next){
        if(req.isAuthenticated()){
            console.log(`notAuthenticated`, req.isAuthenticated())
            return next();
        }
        else{
            console.log(`isAuthenticated`, req.isAuthenticated())
            res.redirect('/planets/loginView')
    //     // console.log(req.isAuthenticated())
          
       }

    },
    ensureGuest : function (req, res, next){
        if(req.isAuthenticated()){
            res.redirect('/planets/all');
        }
        else{
            console.log(`notAuthenticated`, req.isAuthenticated())
            return next();
        }
        
        // next();
    }
}