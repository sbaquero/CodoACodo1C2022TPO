function total()
{
    const precio=200;
    var cant=parseInt(document.getElementById('cantidad').value);
    var cat=document.getElementById('entrada').value;

    switch(cat){
        case 'Estudiante':
            document.getElementById('resumen').value=("Total a pagar: $"+(precio*cant*0.2));
            break;
        case 'Trainee':
            document.getElementById('resumen').value=("Total a pagar: $"+(precio*cant*0.5));
            break;
        case 'Junior':
            document.getElementById('resumen').value=("Total a pagar: $"+(precio*cant*0.85));
            break;
    }

    
}