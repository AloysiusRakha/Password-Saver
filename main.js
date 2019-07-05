//fetch data
function performGetRequest1() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = "";
    
    axios.get('http://34.87.110.208/passwords')
    .then(function (response) {
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
    })
}

//show on html
function generateSuccessHTMLOutput(response) {
    console.log(response.data)
    let output = ``
    for (let i = 0; i < response.data.length; i++) {
        output += `
        <tr>
            <td>${response.data[i].website}</td>
            <td>${response.data[i].email}</td>
            <td>${response.data[i].name}</td>
            <td>${response.data[i].password}</td>
        </tr> 
        `
    }
    return output
}

//buat handle submit
$("#submit-button").click(function () {
    var website = $('#website').val();
    var name = $("#name").val();
    var password = $("#password").val();
    var email = $("#email").val();

    console.log('masok submit', website, name, password, email)

    axios.post('http://34.87.110.208/passwords', {
        website,
        name,
        email,
        password,
    })
        .then(done => {
            console.log('selesai axios~~')
            performGetRequest1()
            $('#website').val('');
            $('#name').val('');
            $('#password').val('');
            $('#email').val('');


        })
        .catch(err => {
            console.log(err)
        })
});