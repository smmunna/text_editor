// Default 
document.getElementById('default').addEventListener('click',function(){
    const textField = document.getElementById('text-area-editor');
    textField.style.fontWeight='Normal';
    textField.style.fontStyle='Normal';
    textField.style.textDecoration='none';

})
// Editing Text 
document.getElementById('bold').addEventListener('click',function(){
    const textField = document.getElementById('text-area-editor');
    textField.style.fontWeight='Bold';
})
// Italic
document.getElementById('italic').addEventListener('click',function(){
    const textField = document.getElementById('text-area-editor');
    textField.style.fontStyle='Italic';
})
// UnderLine
document.getElementById('underline').addEventListener('click',function(){
    const textField = document.getElementById('text-area-editor');
    textField.style.textDecoration='underline';
})
// align-left
document.getElementById('align-left').addEventListener('click',function(){
    const textField = document.getElementById('text-area-editor');
    textField.style.textAlign='left';
})
// align-right
document.getElementById('align-right').addEventListener('click',function(){
    const textField = document.getElementById('text-area-editor');
    textField.style.textAlign='right';
})
// align-right
document.getElementById('center').addEventListener('click',function(){
    const textField = document.getElementById('text-area-editor');
    textField.style.textAlign='center';
})
// align-right
document.getElementById('align-justify').addEventListener('click',function(){
    const textField = document.getElementById('text-area-editor');
    textField.style.textAlign='justify';
})
//color
document.getElementById('main-color').addEventListener('input',function(){
    const myColor = document.getElementById('main-color').value;
    const textField = document.getElementById('text-area-editor');
    textField.style.color = myColor;
})
//fontSize
document.getElementById('fontSize').addEventListener('input',function(){
    const myFontSize = document.getElementById('fontSize').value;
    const textField = document.getElementById('text-area-editor');
    textField.style.fontSize = myFontSize+'px';
})

