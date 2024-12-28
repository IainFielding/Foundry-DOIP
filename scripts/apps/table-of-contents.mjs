/**
 * Compendium that renders pages as a table of contents.
 */
class DOIPTableOfContents extends dnd5e.applications.journal.TableOfContentsCompendium {
  /** @inheritdoc */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["table-of-contents", "doip"]
    });
  }
}

/**
 * Initializes the custom Table of Contents.
 */
export default function initialize() {
  Hooks.once("setup", () => {
    game.packs.get("sogrom-dragon-of-icespire-peak.content").applicationClass = DOIPTableOfContents;
  });
}
