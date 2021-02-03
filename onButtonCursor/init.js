tyrano.plugin.kag.stat.on_button_cursor = "default";
tyrano.plugin.kag.ftag.master_tag.set_onbutton_cursor = {
    pm: {
        content: "run",  // run or opt
        storage: "default"
    },
    start: function(pm){
        console.log(2)
        if (pm.content == "opt") {
            this.kag.stat.on_button_cursor = pm.storage;
        } else if (pm.content == "run") {
            this.setOnButtonCursor(this.kag.stat.on_button_cursor);
        }
        this.kag.ftag.nextOrder();
    },
    setOnButtonCursor: function(cursor){
        $(".event-setting-element").css({
            "textDecoration": "none",
            "cursor": cursor == "default"? "auto" : "url(./data/image/" + cursor + "),default"
        });
    }
};
tyrano.plugin.kag.ftag.master_tag.set_onbutton_cursor.kag = TYRANO.kag;