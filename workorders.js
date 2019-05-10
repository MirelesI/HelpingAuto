function printDiv(divName) {
    console.log("called");
    var printContents = document.getElementById(divName).innerHTML;
    var w = window.open();
    console.log(w);
    // w.document.write(printContents);
    console.log(w.print)
    w.print();
    w.close();
}