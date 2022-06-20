function printDiv({divId, title}) {
    let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');

    mywindow.document.write(`<html><head><title>${title}</title><style>`);
    mywindow.document.write(document.getElementsByTagName('style')[0].innerHTML);
    mywindow.document.write(`</style></head><body><div class='printing' >`);
    mywindow.document.write(document.getElementById(divId).innerHTML);
    mywindow.document.write('</div></body></html>');

    mywindow.document.close();
    mywindow.focus();

    mywindow.print();
    mywindow.close();

    return true;
};

$('#cmd').click(function () {
    printDiv({divId: 'content', title: 'noahkeck'});
});
