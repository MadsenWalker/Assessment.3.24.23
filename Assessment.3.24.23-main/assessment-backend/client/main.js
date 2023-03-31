
let baseURL = 'http://localhost:4000/api'
//Step 1: Grab HTML Element
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton");
const addFortuneBtn = document.getElementById("addButton")
let fortuneInput = document.getElementById ('newFortune')
let fortuneDiv = document.getElementById ('fortuneDisplay')
let deleteInput = document.getElementById("fortuneId");
let deleteBtn = document.getElementById ('deleteButton')
let swapBtn = document.getElementById('swapButton')
let swapInput = document.getElementById('swapId')
let swapDiv = document.getElementById('swapDisplay')

//Step 2: Write Function

const getCompliment = () => {
    axios.get(`${baseURL}/compliment`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
  axios.get(`${baseURL}/fortune`).then((res) => {
    const data = res.data;
    alert(data);
  });
};

const addFortune = () => {
  let bodyObj = {
    name: fortuneInput.value,
  };
  fortuneDiv.innerHTML = "";
  axios
    .post(`${baseURL}/fortune`, bodyObj)
    .then((res) => {
      console.log(res.data);

      for (let i = 0; i < res.data.length; i++) {
        let newSpan = document.createElement("p");
        newSpan.textContent = `${i + 1}. ${res.data[i]}`;
        fortuneDiv.appendChild(newSpan);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteFortune = () => {
  fortuneDiv.innerHTML = "";

  let idToDelete = deleteInput.value;

  axios
    .delete(`${baseURL}/fortune/${idToDelete}`)
    .then((res) => {
      console.log(res.data);

      for (let i = 0; i < res.data.length; i++) {
        let newSpan = document.createElement("p");
        newSpan.textContent = `${i + 1}. ${res.data[i]}`;
        fortuneDiv.appendChild(newSpan);
      }
    })
    .catch((err) => {
      console.log(err);
    });

    };



    const swapFortune = (id, type) => 
      axios
        .put(`${baseURL}/fortune/${id}`, {type})
        .then((res) => {
      console.log(res.data);

      for (let i = 0; i < res.data.length; i++) {
        let newSpan = document.createElement("p");
        newSpan.textContent = `${i + 1}. ${res.data[i]}`;
        swapDiv.appendChild(newSpan);
      }
    })
        .catch((err) => {
          console.log(err);
        });
    



//Step 3: Combine with event listeners

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune);
addFortuneBtn.addEventListener('click', addFortune)
deleteBtn.addEventListener('click', deleteFortune)
swapBtn.addEventListener('click', swapFortune)