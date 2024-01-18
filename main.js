$(document).ready(() => {
    $("#novaatividade").click(() => {
        $("form").slideDown()

    })

    $("#cancelar").click(() => {
        $("form").slideUp()
    })

    

    $("form").on("submit", (e) => {
        e.preventDefault()
        let novatarefa = $("#tarefa").val()
        
        let novoli = $("<li></li>")
        

        novoli.text(novatarefa)

    

        novoli.appendTo($("ul"))


        $("#tarefa").val("")
    })

    

    

    




})