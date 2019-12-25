// handle-title.js
function setTitle(title) {
    document && (document.title = title);
}
function getTitle() {
    return (document && document.title) || "";
}
let documentTitle = getTitle();
    

Date.prototype.format = function(type) {
    console.log(type)
    return new Date(this) + '-'+ type
}