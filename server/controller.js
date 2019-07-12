module.exports = {
    getHouses (req, res){
        const db = req.app.get('db')
        db.get_houses().then(house => res.status(200).send(house))
    },
    addHouse (req, res){
        const db = req.app.get('db')
        const { name, address, city, state, zip } = req.body
        db.add_house([name, address, city, state, zip]).then( () => 
        res.status(200))
    },
    deleteHouse(req,res){
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_house(id).then( () => res.status(200)).catch(err => {
            console.log('Error', err)
        })
    }
}