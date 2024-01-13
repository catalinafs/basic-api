// middleware para validar si es nulo o es diferente de string
const valid = (req, res, next) => {
    const { body } = req;

    if (!body.msg) {
        return res.status(400).json({ msg: 'Es obligatorio el parametro msg' });
    }

    if (typeof body.msg !== 'string') {
        return res.status(400).json({ msg: 'El tipo de dato no corresponde' });
    }

    next();
}

module.exports = valid;