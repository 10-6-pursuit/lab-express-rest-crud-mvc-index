const express=require(`express`)
const app=express()
const locations=require(`./controllers/locations.controller.js`)
const machines=require(`./controllers/machines.controller.js`)
const persons=require(`./controllers/persons.controller.js`)
const plans=require(`./controllers/plans.controller.js`)
const specialEvents=require(`./controllers/special-events.controller.js`)


app.use(`/locations`,locations)
app.use(`/machines`,machines)
app.use(`/persons`,persons)
app.use(`/plans`,plans)
app.use(`/special-events`,specialEvents)

app.get(`/`,(req,res)=>{
    res.send("Hello, world!")

})
app.get(`*`,(req,res)=>{
    res.status(404).send(`Page not found`)

})






module.exports=app