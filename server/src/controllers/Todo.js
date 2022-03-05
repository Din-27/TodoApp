const { todo } = require('../../models')

exports.getTodos = async (req, res) => {
    try {
        let data = await todo.findAll({
            attributes: {
                exclude: ["createdAt", "updateAt"]
            }
        })
        data = JSON.parse(JSON.stringify(data))

        res.send({
            status: "success",
            data
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: "Ada yg salah"
        })
    }
}
exports.getTodo = async (req, res) => {
    try {
        const {id} = req.params
        let data = await todo.findOne({
            where: {
                id
            },
            attributes: {
                exclude: ["createdAt", "updateAt"]
            }
        })
        data = JSON.parse(JSON.stringify(data))

        res.send({
            status: "success",
            data
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: "Ada yg salah"
        })
    }
}

exports.addTodo = async (req, res) => {
    try {
        let data = req.body
        let todos = await todo.create({
          ...data,
          index: 1,
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        }
        })
        todos = JSON.parse(JSON.stringify(todos))
        todos = {
            ...todos,
        }
          res.send({
            status: "Success",
            data : {
              todos,
            }
          })
        } catch (e) {
          console.log(e);
          res.status(500).send({
            status: "failed",
            message: "thats wrong",
          });
        }
}

exports.updateTodo = async (req, res) => {
    try {
        const {id} = req.params
        await todo.update(req.body, {
            where: {
                id
            },
            attributes: {
                exclude: ["createdAt", "updateAt"]
            }
        })
        let todos = await todo.findAll({
            where:{
              id
            },
            attributes: {
              exclude: ["createdAt", "updatedAt", "userOrder", "user"]
            }
          })
        res.send({
            status: "success",
            todos
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: "Ada yg salah"
        })
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const {id} = req.params
        let data = await todo.destroy({
            where: {
                id
            },
            attributes: {
                exclude: ["createdAt", "updateAt"]
            }
        })
        data = JSON.parse(JSON.stringify(data))

        res.send({
            status: "success",
            id
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: "Ada yg salah"
        })
    }
}