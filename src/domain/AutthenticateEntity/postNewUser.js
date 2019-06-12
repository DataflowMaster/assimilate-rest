const properties = {
    path:"/newUser",
    method:"post",
    institute : {
        query: "INSERT INTO institution SET  ?",
        set:(req) => {
            return {
                name : req.body.institute.name,
                address : req.body.institute.address,
                email : req.body.institute.email,
                cp : req.body.institute.cp,
                ownership : req.body.institute.ownership
            }
        }
    },
    professor : {
        query : "INSERT INTO professor SET  ?",
        set: (req,idi) => {
            return {
                name : req.body.name,
                lastname : req.body.lastname,
                email : req.body.email,
                institution_idinstitution: idi
            }
        }
    },
    user : {
        query : "INSERT INTO user SET ?",
        set:  (req,pass ,idp,idi) => {
            return {
                username: req.body.username,
                password: pass ,
                professor_idprofessor : idp,
                professor_institution_idinstitution : idi
            }
        }
    }
};

export function postNewUser({server,connection,encrypt}){
    server(properties.path,function(req, res){
        const insertUser =  (idp,idi) => {
            connection().query( properties.user.query, properties.user.set(req,encrypt(res.req.body.password),idp,idi))
                .on('result',(results)=>{
                    res.end(JSON.stringify(results));
                });
        };
        const insertProfessor = (idi) => {
            connection().query( properties.professor.query, properties.professor.set(req,idi)).on('result',(results)=>{
                insertUser(results.insertId,idi);
            }).on('error',(e)=>{
                res.end(JSON.stringify(e));
            });
        };

        if(typeof res.req.body.institute.id === "undefined"){
            connection().query( properties.institute.query, properties.institute.set(req)).on('result',(results)=>{
                insertProfessor(results.insertId);
            });
        }else{
            insertProfessor(res.req.body.institute.id);
        }
    },properties.method);
}

