import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response)=>{

    // Consulta ao Mongo DB

    // Consulta com `find` - retorna varias opcoes -> sempre um Array
    // let usuarios = await User.find({
    //     'name.first_name': 'Daniel',
    //     // email: 'danieltugok@gmail.com',
    //     // age: {$gt: 18, $lt: 50}, // age maior que 18 e menor que 50 
    //         //-> opcoes que podem ser usadas: $gt - greater then / $gte - greater then or equal / $lt - less then / $lte - less then or equal
    //     // interesting: 'coding'
    // }).sort({ // Ordenacao no resultado
    //     age: 1, //1: asc, -1: desc
    //     "name.first_name": 1,
    // })
    // .skip(0)
    // .limit(10);

    //  Consulta com `findOne` - Para procurar apenas um usuário - Retorna sempre um Objeto
    // let usuario = await User.findOne({email: 'danieltugok@gmail.com'})

    // Para procurar apenas pelo ID - Retorna sempre um Objeto
    // let usuarioById = await User.findById('62a53771bafbb55a66e308cd')

    // console.log("🚀 ~ file: homeController.ts ~ line 9 ~ home ~ usuarios", usuarios);



    // Inserindo dados no Mongo DB
    // let newUserMethod1 = await User.create({
    //     name: { first_name: 'Larissa111', last_name: 'Hagge111' },
    //     email: 'haggeha111@gmail.com',
    //     age: 32,
    //     interesting: ['Comida1', 'Trabalhar1', 'Filhos1']
    // });
    // console.log("🚀 ~ file: homeController.ts ~ line 27 ~ home ~ newUserMethod1", newUserMethod1);

    // Inserindo dados no Mongo DB method 2 (esse metodo permite que seja tratado um dado para depois colocar dentro do array)
    // let newUserMethod2 = new User();
    // newUserMethod2.name= { first_name: 'Larissa', last_name: 'Hagge' };
    // newUserMethod2.email= 'haggeha@gmail.com';
    // newUserMethod2.age= 32;
    // newUserMethod2.interesting= ['Comida', 'Trabalhar', 'Filhos'];
    // let resultadoMethod2 = await newUserMethod2.save();

    // console.log("🚀 ~ file: homeController.ts ~ line 27 ~ home ~ resultadoMethod2", resultadoMethod2);



    // Updating data - primeiro parametro eh a regra para os usuarios que vc quer achar, e a outra o que voce quer alterar.
    // await User.updateMany(
    //     { age: {$lte: 18}},
    //     { age: 18}
    // )

    // Updating apenas um data - primeiro parametro eh a regra para os usuarios que vc quer achar, e a outra o que voce quer alterar.
    // await User.updateOne(
    //     {email: 'danieltugok@gmail.com'},
    //     { age: 46}
    // )

    // Updating apenas um data - Outra maneira de fazer update de um dado
    // let daniel = await User.findOne({email: 'danieltugok@gmail.com'});
    // if (daniel) {
    //     daniel.name.last_name = "Silva"
    //     daniel.age = 47;
    //     await daniel.save();
    // }

    // 4 opcao de alteracao de dados
    // let user = await User.findOneAndUpdate();


    // DELETE - metodo 1
    await User.findOneAndDelete({ email: 'haggeha@gmail.com' })

    // DELETE - metodo 2 (Voce encontra o dado e depois deleta)
    let usuarioParaDeletar = await User.findOne({ email: 'danielkogut@gmail.com'});
    if (usuarioParaDeletar) await usuarioParaDeletar.remove();














  

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};