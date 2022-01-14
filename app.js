const {Composer} = require('micro-bot')

const bot = new Composer()


bot.start(ctx=>{
    ctx.reply("The bot only available in the group")
})


bot.command('faq',ctx=>{
    ctx.replyWithHTML(`
    FAQ:\n
    1 - Place an order on the store you like
    2 - Wait to receive product
    3 - Contact @refundagent after product is received
    4 - We will handle the refund process
    5 - Upon refund confirmation payment must be made
    6 - Repeat the whole process

    `,
    {
        parse_mode: "HTML"
    }).catch((e)=>ctx.reply("Somthing is wrong"))
})

bot.hears('faq',ctx=>{
    ctx.replyWithHTML(`
    FAQ:\n
    1 - Place an order on the store you like
    2 - Wait to receive product
    3 - Contact @refundagent after product is received
    4 - We will handle the refund process
    5 - Upon refund confirmation payment must be made
    6 - Repeat the whole process

    `,
    {
        parse_mode: "HTML"
    }).catch((e)=>ctx.reply("Somthing is wrong"))
})

bot.command('stores',ctx=>{
    ctx.replyWithHTML(`
    Stores: \n
    Our refund storelist is as below (Contact @refundagent for refunds)
    Stores that are not on our googlesheet please contact (Can do almost all stores)
    Limits up to $25,000 for paypal stores INSTANT REFUNDS
    SERVICES FEES LOW @ 10%
    https://docs.google.com/spreadsheets/d/1QqlggC72AZS37ti_Zn1skrw-EUUXuyGS-qmN5-XO5nM/edit?usp=sharing
    `,{
        parse_mode: "HTML"
    }).catch((e)=>ctx.reply("Something is wrong"))
})

bot.hears('stores',ctx=>{
    ctx.replyWithHTML(`
    Stores: \n
    Our refund storelist is as below (Contact @refundagent for refunds)
    Stores that are not on our googlesheet please contact (Can do almost all stores)
    Limits up to $25,000 for paypal stores INSTANT REFUNDS
    SERVICES FEES LOW @ 10%
    https://docs.google.com/spreadsheets/d/1QqlggC72AZS37ti_Zn1skrw-EUUXuyGS-qmN5-XO5nM/edit?usp=sharing
    `,{
        parse_mode: "HTML"
    }).catch((e)=>ctx.reply("Something is wrong"))
})


bot.command('store',ctx=>{
    ctx.replyWithHTML(`
    Stores: \n
    Our refund storelist is as below (Contact @refundagent for refunds)
    Stores that are not on our googlesheet please contact (Can do almost all stores)
    Limits up to $25,000 for paypal stores INSTANT REFUNDS
    SERVICES FEES LOW @ 10%
    https://docs.google.com/spreadsheets/d/1QqlggC72AZS37ti_Zn1skrw-EUUXuyGS-qmN5-XO5nM/edit?usp=sharing
    `,{
        parse_mode: "HTML"
    }).catch((e)=>ctx.reply("Something is wrong"))
})

bot.hears('store',ctx=>{
    ctx.replyWithHTML(`
    Stores: \n
    Our refund storelist is as below (Contact @refundagent for refunds)
    Stores that are not on our googlesheet please contact (Can do almost all stores)
    Limits up to $25,000 for paypal stores INSTANT REFUNDS
    SERVICES FEES LOW @ 10%
    https://docs.google.com/spreadsheets/d/1QqlggC72AZS37ti_Zn1skrw-EUUXuyGS-qmN5-XO5nM/edit?usp=sharing
    `,{
        parse_mode: "HTML"
    }).catch((e)=>ctx.reply("Something is wrong"))
})


bot.command('vouches',ctx=>{
    ctx.reply(`
    Vouches:\n
    @worldwiderefundvouch
`).catch((e)=>ctx.reply("Somthing is wrong"))

})

bot.hears('vouches',ctx=>{
    ctx.reply(`
    Vouches:\n
    @worldwiderefundvouch
`).catch((e)=>ctx.reply("Somthing is wrong"))

})

bot.command('vouch',ctx=>{
    ctx.reply(`
    Vouches:\n
    @worldwiderefundvouch
`).catch((e)=>ctx.reply("Somthing is wrong"))

})

bot.hears('vouch',ctx=>{
    ctx.reply(`
    Vouches:\n
    @worldwiderefundvouch
`).catch((e)=>ctx.reply("Somthing is wrong"))

})

bot.command('boxing',ctx=>{
    ctx.reply(`
    Boxing: \n
    Available for US/UK/EU/DE/FR/AUS
    -FTID
    -FTID V3
    -FTIDNA
    -LIT
    All available, drops within 24 hours Contact @refundagent`)
})

bot.hears('boxing',ctx=>{
    ctx.reply(`
    Boxing: \n
    Available for US/UK/EU/DE/FR/AUS
    -FTID
    -FTID V3
    -FTIDNA
    -LIT
    All available, drops within 24 hours Contact @refundagent`)
})



module.exports = bot
