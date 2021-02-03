tyrano.plugin.kag.stat.on_button_cursor = "default";
tyrano.plugin.kag.ftag.master_tag.set_onbutton_cursor = {
    pm: {
        content: "run",  // run or opt
        storage: "default"
    },
    start: function(pm){
        if (pm.content == "opt") {
            this.kag.stat.on_button_cursor = pm.storage;
        } else if (pm.content == "run") {
            var cursor = pm.storage || this.kag.stat.on_button_cursor;
            $(".event-setting-element").css("cursor",cursor == "default"? "auto" : "url(./data/image/" + cursor + "),default");
        }
        this.kag.ftag.nextOrder();
    }
};
tyrano.plugin.kag.ftag.master_tag.set_onbutton_cursor.kag = TYRANO.kag;