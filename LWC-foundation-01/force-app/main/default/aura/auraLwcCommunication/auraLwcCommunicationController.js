({
    handle : function(component, event) {

        var sendMsg = event.getParam('message');
        component.set("v.recievedMsg", sendMsg);
        console.log("Message received: " + sendMsg);

    }
})
