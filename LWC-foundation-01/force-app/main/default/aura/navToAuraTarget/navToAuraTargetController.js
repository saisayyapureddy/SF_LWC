({
    doInit : function(component) {

        var pageReference1 = component.get("v.pageReference");

        if(pageReference1 && pageReference1.state.c__id) {
            component.set("v.id", pageReference1.state.c__id);
        }


    }
})
