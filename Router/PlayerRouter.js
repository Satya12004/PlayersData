const express=require('express')
const { CreatePlayer, getPlayer, UpdatePlayer,DeletePlayer, listPlayers } = require('../Controller/PlayerController')
const router=express.Router()
router.post('/CreatePlayer',CreatePlayer)
router.post('/getplayer/:id',getPlayer)
router.put('/UpdatePlayer/:id',UpdatePlayer)
router.delete('/deletePlayer/:id',DeletePlayer)
router.get("/listPlayer", listPlayers)

module.exports=router