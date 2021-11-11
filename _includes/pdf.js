window.jsPDF = window.jspdf.jsPDF;

var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#cmd').click(function () {
    doc.html(document.getElementById('content'), {
        callback: function (doc) {
            doc.save('noahkeck.pdf');
          },
        html2canvas: {
            scale: 0.22
        },
        margin: [15, 15, 15, 15]
    });
});
