let button = document.getElementById('print');

function CallPrint(strid) {
    var prtContent = document.getElementById(strid);
    newWin= window.open('','print table', 'height=600, width=1000');
    newWin.document.write('<link rel="stylesheet" href="../styles/main.scss" type="text/css" />');
    newWin.document.write(prtContent.outerHTML);
    newWin.print();
    newWin.close();
  }

  button.addEventListener('click', ()=>{CallPrint('print_table')})