const botaoEnviar = document.getElementById('botao')
const campos = document.querySelectorAll('.inputs')
const legendaObrigatorio = document.querySelectorAll('.obrigatorio')

botaoEnviar.addEventListener('click', ()=>{
    
    campos.forEach(
        
        function (inputs, i) {
            if (inputs.value === ""){
                inputs.classList.remove('verde')
                inputs.classList.add('vermelha')
                legendaObrigatorio[i].classList.add('ativo')
            }
            else {
                inputs.classList.remove('vermelha')
                inputs.classList.add('verde')
                legendaObrigatorio[i].classList.remove('ativo')
            }
        }
    )
})
