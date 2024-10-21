({
    

    handleMessage: function(component,message) {
        if(message !=null && message.getParam("lmsData")!=null)
        {

            //component.set("v.messageRecieved",message.getParam("lmsData").value);

            component.set("v.messageRecieved",message.getParam("lmsData").value
            ?message.getParam("lmsData").value:'No Data found');
        }
    },

    inputHandler: function(component,event) {
        component.set("v.messageSend",event.target.value);
    },


    publishHandler: function(component) {
        // Get the value from the component attribute
        let sendMsg = component.get("v.messageSend");
        let msg = {
            lmsData: {
                value: sendMsg
            }
        }
    
        // Publish the message through the Message Channel
        component.find("SampleMessageChannel").publish(msg);
    }  
})
