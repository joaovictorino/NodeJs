module.exports = (app) => {
    const HomeController = {
        index: function(req, res){
            res.render('home/index');
        },
        login(req, res){
            console.log(req);
            console.log(req.body);
            // const {usuario} = req.body;
            // const {email, nome} = usuario;
            // if(email && nome){
            //     usuario.contatos = [];
            //     req.session.usuario = usuario;
                //  res.redirect('/contatos');
            // }else{
                res.redirect('/');
            // }
        },
        logout(req, res){
            req.session.destroy();
            res.redirect('/');
        }
    };
    return HomeController;
};