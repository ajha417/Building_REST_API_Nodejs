const routes = (app)=>{
    app.route('/contact')
    .get((req,res)=>
    res.send("this is get route")
    ).post((req,res)=>
        res.send("this is post route")
    )

    app.route('/contact/:contactId')
    .put((req,res)=>
        res.send('This is update request')
    )
    .delete((req,res)=>
        res.send('This is delete request')
    )
}

module.exports = routes;