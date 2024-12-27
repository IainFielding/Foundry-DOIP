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