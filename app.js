document.getElementById('btnDownloadCV').addEventListener('click', function(){
    let enlace = document.createElement('a');
    enlace.href = './utility/Hoja-de-vida.pdf'
    enlace.download = 'Hoja-de-vida.pdf'
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
})

document.getElementById('btnDownloadC').addEventListener('click', function(){
    let enlace = document.createElement('a');
    enlace.href = './utility/DEVF-certificate-jofvargasa.pdf'
    enlace.download = 'DEVF-certificate-jofvargasa.pdf'
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
})