window.jsPDF = window.jspdf.jsPDF;

var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

function printDiv({divId, title}) {
    let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');

    mywindow.document.write(`<html><head><title>${title}</title><style>`);
    mywindow.document.write(document.getElementsByTagName('style')[0].innerHTML);
    mywindow.document.write('</style></head><body >');
    mywindow.document.write(document.getElementById(divId).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
};

$('#cmd').click(function () {
    printDiv({divId: 'content', title: 'noahkeck'});
    /*doc.html(document.getElementById('content'), {
        callback: function (doc) {
            doc.save('noahkeck.pdf');
          },
        html2canvas: {
            scale: 0.22
        },
        margin: [15, 15, 15, 15]
    });*/
});
