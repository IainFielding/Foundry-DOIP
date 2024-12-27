/* -------------------------------------------- */
/*  Imports                                     */
/* -------------------------------------------- */
import initTableOfContents from "./apps/table-of-contents.mjs";
import JournalSheet from "./apps/journal-sheet.mjs";


/* -------------------------------------------- */
/*  Functions                                   */
/* -------------------------------------------- */

function customFilepicker(event){
    event.preventDefault();
    const button = event.currentTarget;
    const target = button.dataset.target;
    const field = button.form[target] || null;
    const fp = new FilePicker({
        field, button,
        type: button.dataset.type,
        current: field?.value ?? '',
    });
    return fp.browse();
}
/* -------------------------------------------- */
/*  Hooks                                       */
/* -------------------------------------------- */

Hooks.once('init', async function() {
 // Adding module symbols to module namespace
 const module = game.modules.get("sogrom-dragon-of-icespire-peak");
 module.apps = {};
 module.dataModels = {};

 game.settings.register("sogrom-dragon-of-icespire-peak", "lastVersion", {
   name: "Last Version",
   hint: "The last version checked against to determine whether to show the changelog.",
   scope: "world",
   config: false,
   type: String,
   default: "1.0.0"
 })

 // Creating DOIP config object
 CONFIG.DOIP = {};

 // Register Journal Sheet
 /*
 DocumentSheetConfig.registerSheet(JournalEntry, "dnd-players-handbook", PlayersHandbookJournalSheet, {
   types: ["base"],
   label: "Player's Handbook",
   makeDefault: false
 }); */
 
 initTableOfContents();

});

Hooks.on('renderSceneConfig', (app, [html], context) => {
    html.querySelector('.form-group:has([name="foreground"])').insertAdjacentHTML('afterend',`<div class="form-group">
        <label>Thumbnail Image</label>
        <div class="form-fields">
            <button type="button" class="file-picker" data-type="imagevideo" data-target="thumb" title="Browse Files" tabindex="-1"><i class="fas fa-file-import fa-fw"></i></button>
            <input class="image" type="text" name="thumb" placeholder="File Path" value="${app.document.thumb}">
        </div>
    </div>`)
    html.querySelector('button.file-picker[data-target="thumb"]').addEventListener('click', customFilepicker)
    app.setPosition()
})


Hooks.once('ready', async function() {

});
