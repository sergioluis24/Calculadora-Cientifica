// Bienvenido al bello codigo que hace funcionar la calculadora 3000
// Variables globales
let data
let answer
let clear
let temp
//Funciones
const identify_plus = data => {
  // Identificamos el index del operador + en la data recibida
  let index_operator_plus = data.indexOf("+")
  let data_array = []
  if (index_operator_plus !== -1) {
    // alert(index_operator_plus)
    // Procedo a convertir la data que esta en string a un array
    data_array = data.split("")
    console.log(data_array)
    let number_one = []
    let number_two = []
    //Con el siguiente codigo al mismo tiempo en que separo las cifras, las uno concatenandolas ya que son string
    // Nombre one
    let number_one_aux = ""
    for (let i = 0; i < index_operator_plus; i++) {
      number_one_aux += data_array[i]
    }
    //Number two
    let number_two_aux = ""
    for (let i = index_operator_plus + 1; i < data_array.length; i++) {
      number_two_aux += data_array[i]
    }
    //Ya tenemos por separado las cifras a operar ahora vamos convertirlas Int ya que todavia estan en string
    number_one_aux = parseInt(number_one_aux, 10)
    number_two_aux = parseInt(number_two_aux, 10)
    // Opero
    let result_plus = number_one_aux + number_two_aux
    // console.log(result_plus)
    //Set a el input
    let data_ = document.querySelector("#data")

    data_.value = result_plus.toString()
     return result_plus
  }
}
const identify_minus = data => {
  // Identificamos el index del operador - en la data recibida
  let index_operator_minus = data.indexOf("-")
  let data_array = []
  if (index_operator_minus !== -1) {
    // Procedo a convertir la data que esta en string a un array
    data_array = data.split("")
    console.log(data_array)
    let number_one = []
    let number_two = []
    //Con el siguiente codigo al mismo tiempo en que separo las cifras, las uno concatenandolas ya que son string
    // Nombre one
    let number_one_aux = ""
    for (let i = 0; i < index_operator_minus; i++) {
      number_one_aux += data_array[i]
    }
    //Number two
    let number_two_aux = ""
    for (let i = index_operator_minus + 1; i < data_array.length; i++) {
      number_two_aux += data_array[i]
    }
    //Ya tenemos por separado las cifras a operar ahora vamos convertirlas Int ya que todavia estan en string
    number_one_aux = parseInt(number_one_aux, 10)
    number_two_aux = parseInt(number_two_aux, 10)
    //Opero
    let result_minus = number_one_aux - number_two_aux
    console.log(result_minus)
    //Set a el input
    let data_ = document.querySelector("#data")

    data_.value = result_minus.toString()
  }
}
const identify_multiply = data => {
  // Identificamos el index del operador - en la data recibida
  let index_operator_multiply = data.indexOf("*")
  let data_array = []
  if (index_operator_multiply !== -1) {
    // Procedo a convertir la data que esta en string a un array
    data_array = data.split("")
    console.log(data_array)
    let number_one = []
    let number_two = []
    //Con el siguiente codigo al mismo tiempo en que separo las cifras, las uno concatenandolas ya que son string
    // Nombre one
    let number_one_aux = ""
    for (let i = 0; i < index_operator_multiply; i++) {
      number_one_aux += data_array[i]
    }
    //Number two
    let number_two_aux = ""
    for (let i = index_operator_multiply + 1; i < data_array.length; i++) {
      number_two_aux += data_array[i]
    }
    //Ya tenemos por separado las cifras a operar ahora vamos convertirlas Int ya que todavia estan en string
    number_one_aux = parseInt(number_one_aux, 10)
    number_two_aux = parseInt(number_two_aux, 10)
    //Opero
    let result_multiply = number_one_aux * number_two_aux
    console.log(result_multiply)
    //Set a el input
    let data_ = document.querySelector("#data")

    data_.value = result_multiply.toString()
  }
}
const identify_divide = data => {
  // Identificamos el index del operador - en la data recibida
  let index_operator_divide = data.indexOf("/")
  let data_array = []
  if (index_operator_divide !== -1) {
    // Procedo a convertir la data que esta en string a un array
    data_array = data.split("")
    console.log(data_array)
    let number_one = []
    let number_two = []
    //Con el siguiente codigo al mismo tiempo en que separo las cifras, las uno concatenandolas ya que son string
    // Nombre one
    let number_one_aux = ""
    for (let i = 0; i < index_operator_divide; i++) {
      number_one_aux += data_array[i]
    }
    //Number two
    let number_two_aux = ""
    for (let i = index_operator_divide + 1; i < data_array.length; i++) {
      number_two_aux += data_array[i]
    }
    //Ya tenemos por separado las cifras a operar ahora vamos convertirlas Int ya que todavia estan en string
    number_one_aux = parseInt(number_one_aux, 10)
    number_two_aux = parseInt(number_two_aux, 10)
    //Opero
    let result_divide = number_one_aux / number_two_aux
    console.log(result_divide)
    //Set a el input
    let data_ = document.querySelector("#data")

    data_.value = result_divide.toString()
  }
}
const identify_next_operation = (data) => {
    
}
//
const new_plus = (temp) => {
  let number_one = parseInt(temp,10)
  let number_two = parseInt(data.value,10)
  console.log(number_one)
  console.log(number_two)
    let result = number_one+number_two
    return result
}
// Eventos
data = document.querySelector("#data")
answer = document.querySelector("#answer")
//Resolvemos cuaquier operacion y la pintamos el input
answer.addEventListener("click", e => {
  e.preventDefault()
  // data =parseInt(data.value,10)
  // alert(data.value)
  identify_plus(data.value)
  identify_minus(data.value)
  identify_multiply(data.value)
  identify_divide(data.value)
//   identify_next_operation()
})
//Limpia el campo data
clear = document.querySelector("#clear")
clear.addEventListener("click", () => {
  data.value = ""
  temp = 0
  localStorage.setItem('temp-result','')
})

/*Nota importante debo de jugar con los index de data para identificar la primera cifra antes del operador(si es que existe este),hacer lo mismo despues del numerador y luego operarlos segun el mismo -----Resulto*/
/*Nota !important debo de verifivar que al momento de presionar una tecla de operacion aritmetica no halla una existente de lo contrario debo de realizar la primera operacion hasta el momento y asi poder continuar operando con lo demas */
//Eventos para escribir
//numeros
//Variables
let one, two, three, four, five, six, seven, eight, nine
(() => {
  one = document.querySelector("#one").addEventListener("click", () => {
    data.value += "1"
  })
  two = document.querySelector("#two").addEventListener("click", () => {
    data.value += "2"
  })
  three = document.querySelector("#three").addEventListener("click", () => {
    data.value += "3"
  })
  four = document.querySelector("#four").addEventListener("click", () => {
    data.value += "4"
  })
  five = document.querySelector("#five").addEventListener("click", () => {
    data.value += "5"
  })
  six = document.querySelector("#six").addEventListener("click", () => {
    data.value += "6"
  })
  seven = document.querySelector("#seven").addEventListener("click", () => {
    data.value += "7"
  })
  eight = document.querySelector("#eight").addEventListener("click", () => {
    data.value += "8"
  })
  nine = document.querySelector("#nine").addEventListener("click", () => {
    data.value += "9"
  })
  cero = document.querySelector("#cero").addEventListener("click", () => {
    data.value += "0"
  })
})()
//Operadores
//Variables
let equis,divide,minus,plus,point
(()=>{
    equis = document.querySelector("#equis").addEventListener("click", () => {
        data.value += "*"
      })
      divide = document.querySelector("#divide").addEventListener("click", () => {
        data.value += "/"
      })
      
      minus = document.querySelector("#minus").addEventListener("click", () => {
        data.value += "-"
      })
      plus = document.querySelector("#plus").addEventListener("click", () => {
        if(data.value.indexOf('+')!==-1){
          //    identify_plus(data)
             
             temp = identify_plus(data.value)
             localStorage.setItem('temp-result',temp)
            console.log(temp)
            data.value=""
            let result= document.querySelector('#answer').addEventListener('click',()=>{   let temp_result = localStorage.getItem('temp-result')
                const print = new_plus(temp_result)
                data.value=print
            })
            }else data.value += "+"
      })//Quede aqui me duele la cabeza men trata de recordar
      point = document.querySelector("#point").addEventListener("click", () => {
        data.value += "."
      })
})()
  
