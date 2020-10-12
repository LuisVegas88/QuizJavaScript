//VARIABLE GENERALES

let number = 0;
let Aciertos = 0;





let questions = [
    {
        Q : "¿Quién es el primero en la serie en matar a un caminante blanco?",
        A : ["Jon Nieve", "Sam Tarly","Bran Stark", "Lord Mormont"],
        Correct: "Sam Tarly"
    },
    {
        Q : "¿Cómo se llaman los dragones de Daenerys?",
        A : ["Drogon, Valerion y Rhego", "Drogon, Rhaezal y Viserion","Drogon, Rhaegal y Viserion","Drakos, Valerion y Rhego"],
        Correct:"Drogon, Rhaegal y Viserion"
    },
    {
        
        Q : "¿Quién corta la mano a Jaime Lannister?",
        A : ["Vargo Hoat","Brienne de Tarth","Roose Bolton","Robb Stark"],
        Correct:"Vargo Hoat"
    },
    {
        
        Q : "¿Cómo se llama la espada de Jon Nieve?",
        A : ["Arrancacorazones","Lamento de Viuda", "Anduril", "Garra"],
        Correct:"Garra"
    }, 
    {
        Q : "¿Qué casas se enfrentan en la Batalla de los Bastardos",
        A : ["Stark y Targaryen", "Bolton y Targaryen", "Grejoy y Stark", "Stark y Bolton"],
        Correct: "Stark y Bolton"
    }, 
    {
        Q : "¿Cúal de estos no es un apellido de bastardo",
        A : ["Fuego", "Flores", "Arena", "Pyke"],
        Correct: "Fuego"
    },
    {
        Q : "¿Qué dios no es adorado en poniente?",
        A : ["R´hllor", "El Dios de los Mil Rostros", "El Dios Ahogado", "El Padre"],
        Correct: "El Dios de los Mil Rostros"
    }, 
    {
        Q: "¿Qué relación de parentesco tienen Benjen y Ned Stark?",
        A : ["Cuñados","Sobrino/Tio", "Primos", "Hermanos"],
        Correct: "Hermanos"
    }, 
    {
        Q: "¿Cómo muere Robert Baratheon?",
        A: ["Ataque de un jabalí", "De viejo", "En la Batalla del Aguasnegras", "Envenenado por Cersei"],
        Correct: "Ataque de un jabalí"
    },
    {
        Q: "¿Quien es hijo/a de Lyanna Stark y Rhaegar Targaryen?",
        A: ["Daenerys", "Aegon","Jon Nieve", "Robb"],
        Correct: "Jon Nieve"
    }

];


//Obtenemos el body para meterle los elementos 

let bodySelector = document.querySelector("body");

//CONTADOR DE PREGUNTAS

function createQuestionCounter(){

    let containerNumberQuestion = document.createElement("div");
    containerNumberQuestion.className = "containerNumberQuestion";

    let numberQuestion = document.createElement("h1");
    numberQuestion.className = "numberQuestion";

    
    bodySelector.appendChild(containerNumberQuestion);
    containerNumberQuestion.appendChild(numberQuestion);
}

//Actualizar Numero contador de Preguntas;

function updateQuestionsCounter(question){

    document.querySelector("h1").innerText= `Pregunta ${question}`;
    
}


//FUNCIÓN PARA CREAR LAS PREGUNTAS


function BuildAQ(question){
   
    let formulario = document.querySelector(".formulario");

    //Texto de la pregunta
    
    let legend = document.createElement("legend");
    legend.className = "legend";
    legend.innerText = questions[question].Q;

    formulario.appendChild(legend);

    //Respuestas

    for (let i = 0; i < questions[question].A.length; i++) {

        //Contenedor de Preguntas

        let AnswersContainer = document.createElement("div");
        AnswersContainer.className = "AnswersContainer";

        

        //Botones con las opciones

        let inputs = document.createElement("button");
        inputs.className = "buttonA"

        //texto de las preguntas 

        inputs.innerText = questions[question].A[i];

        //atributos botones 

        inputs.setAttribute("id", questions[question].A[i]);
        inputs.setAttribute("type", "button");
        inputs.setAttribute("name", "respuesta");
        inputs.setAttribute("value", questions[question].A[i]);

        //Se añade al contenedor

        AnswersContainer.appendChild(inputs);
        formulario.appendChild(AnswersContainer);
       
    }
}



function createQuestionForm()
{
  //Creacion del formulario para la pregunta
  let formulario = document.querySelector("form");
  formulario.className= "formulario";

  bodySelector.appendChild(formulario);

}




//CORRECTAS Y FALLIDAS 


let correctas = document.addEventListener("click", (e)=>{

    console.log(e.target.id);
    console.log(e.target.className);
    

    if(e.target.id==questions[number-1].Correct){
        e.target.className="green";
        Aciertos++;
        setTimeout(()=>{showNextQuestion()},1000);
        
    }
    if(e.target.id!=questions[number-1].Correct){
        e.target.className="red";
        setTimeout(()=>{showNextQuestion()},1000);

    }
})


//PASAR A LA SIGUIENTE PREGUNTA



function showNextQuestion(){

    

    if(number < questions.length){

        updateQuestionsCounter(number + 1);
        let questionText = document.querySelector("legend");
        if (questionText){
            questionText.remove();
        }
        let options = document.querySelectorAll(".AnswersContainer");
        options.forEach((option) => {option.remove()});
        BuildAQ(number)
        number++;
        
        
    }
    else {

        localStorage.setItem("Aciertos", Aciertos);
        
        
        return window.location="end.html";
        
    }
}





//Llamamos a las funciones

createQuestionCounter();
createQuestionForm();
showNextQuestion();








