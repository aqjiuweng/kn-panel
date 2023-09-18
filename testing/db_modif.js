const {connect_to_db,get_all_users, update_user,get_main_panel_url,uidv2,proxy_obj_maker,get_panel} = require("../utils");


connect_to_db().then(res => {
    accounts_clct = res.accounts_clct;
    panels_clct = res.panels_clct;
    users_clct = res.users_clct;
    logs_clct = res.logs_clct;
    modify_db();
});


async function modify_db()
{
    // var users_arr = await users_clct.find({ subscription_url: { $regex: "https://de.keskinnetwork.comhttps://de.keskinnetwork.com" } }).toArray();
    
    // for(user of users_arr)
    // {
    //     await users_clct.updateOne({username:user.username}, {$set: {subscription_url:user.subscription_url.replace("https://de.keskinnetwork.com","")}});
    //     console.log("UPDATED USER => " + user.username);
    // }
    // // await users_clct.updateMany({},{$set: {disable_counter:{value:0,last_update:Math.floor(Date.now()/1000)}}});
    // // await accounts_clct.updateMany({is_admin:0},{$set: {business_mode:0}});
    // // await accounts_clct.updateMany({is_admin:0},{$set: {max_non_active_days:15}});
    // console.log("DONE !!!");

    var users_arr = await get_all_users();
    // await accounts_clct.updateMany({is_admin:0},{$set: {lifetime_volume:0}})
    for(user of users_arr)
    {
        // await update_user(user.id, {real_subscription_url:user.subscription_url,subscription_url:get_main_panel_url() + "/sub/" + uidv2(10)});
        // console.log("UPDATED SUBLINK OF => " + user.username);
        // if(!user.inbounds)
        // {
        //     var corresponding_panel = await get_panel(user.corresponding_panel_id);
        //     var inbounds = proxy_obj_maker(Object.keys(corresponding_panel.panel_inbounds),"none",2);
        //     await update_user(user.id, {inbounds});
        //     console.log("UPDATED INBOUNDS OF => " + user.username);
        // }
        //await update_user(user.id, {subscription_url:user.subscription_url.replace("http://ff.arman-k.cfd:5000","http://panel.arman-k.cfd:80")});
        await update_user(user.id, {desc:""});
    }

    console.log("DONE !!!");

}