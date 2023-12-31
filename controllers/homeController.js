module.exports.index = (req, res) => {
    const user = {nome: 'Cauã', idade: 20}
    res.render('index', { user });
    // res.send('Olá, mundo!')
}