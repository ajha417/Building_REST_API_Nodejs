const routes = (app)=>{
    app.route('/contact')
    .get((req,res,next)=>
    {
        console.log(`the original request point is ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    },(req,res,next)=>{

        res.send("this is get route");
        next();
    }
    ).post((req,res,next)=>{
        console.log(`the original request point is ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    },
    (req,res,next)=>{
        res.send("this is post route")
        next();
    }
    )

    app.route('/contact/:contactId')
    .put((req,res,next)=>{
        console.log(`the original request point is ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    },(req,res,next)=>{
        
        res.send('This is update request')
        next();
    }
    )
    .delete((req,res,next)=>
        res.send('This is delete request')
    )
}

module.exports = routes;