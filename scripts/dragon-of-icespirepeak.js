/* -------------------------------------------- */
/*  Imports                                     */
/* -------------------------------------------- */
import initTableOfContents from "./apps/table-of-contents.mjs";
import JournalSheet from "./apps/journal-sheet.mjs";

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
 
 DocumentSheetConfig.registerSheet(JournalEntry, "sogrom-dragon-of-icespire-peak", DOIPJournalSheet, {
   types: ["base"],
   label: "Dragon of Icespire Peak",
   makeDefault: false
 }); 
 
 initTableOfContents();

});




Hooks.once('ready', async function() {

});
