
let baseURL = 'http://localhost:4000'
//Step 1: Grab HTML Element
const complimentBtn = document.getElementById("complimentButton")

//Step 2: Write Function

const getCompliment = () => {
    axios.get(`${baseURL}/compliments`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


//Step 3: Combine with event listeners

complimentBtn.addEventListener('click', getCompliment)