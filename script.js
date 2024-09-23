function inputValue(id) {
    const InputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(InputValue);
    return inputNumber;
  }
  function inputText(id) {
    const textValue = document.getElementById(id).innerText;
    const TextNumber = parseFloat(textValue);
    return TextNumber;
  }
  
  function onOf(id) {
    document.getElementById("historySection").classList.add("hidden");
    document.getElementById("main").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
  }
  
  function onO(id) {
    document.getElementById("Donation").style.backgroundColor = "#F3F3F3";
    document.getElementById("History").style.backgroundColor = "#F3F3F3";
    document.getElementById(id).style.backgroundColor = "#B4F461";
  }
  // Card One
  document.getElementById("cardOneBtn").addEventListener("click", (event) => {
    const cardOneValue = inputValue("cardOne");
    if (isNaN(cardOneValue) || cardOneValue < 1) {
      alert("Please Add Money");
      document.getElementById("hidden").classList.add("hidden");
      window.location.reload();
      return;
    }
    const cardoneheading = document.getElementById("cardoneheading").innerText;
    const taka = "Taka";
    const data = cardOneValue + " " + taka + " " + cardoneheading;
    const historySection = document.getElementById("historySection");
  
    const currentTime = new Date();
  
    historySection.innerHTML += `
    <p class = " border p-6 mt-4 mb-4 rounded-2xl ">${data} <br>  <br> <span class = "text-gray-400">${currentTime}</span>  </p>
    `;
  
    const NavtotalMoney = inputText("totalMoney");
    const cardOneInputValue = inputValue("cardOne");
    const navUpdateMoney = NavtotalMoney - cardOneInputValue;
    if (navUpdateMoney < 0) {
      document.getElementById("cardOne").value = "";
      alert("Please Add Money");
      return;
    }
    document.getElementById("totalMoney").innerText = navUpdateMoney;
    const cardOneValueStore = inputText("cardOneSpan");
    const totalMoney = cardOneValue + cardOneValueStore;
    document.getElementById("cardOneSpan").innerText = totalMoney;
  
    document.getElementById("cardmodalbtn").addEventListener("click", () => {
      document.getElementById("cardOne").value = "";
    });
  });
  
  // Card One End
  // Card Two
  document.getElementById("cardTwoBtn").addEventListener("click", (event) => {
    const cardTwoValue = inputValue("cardTwo");
    if (isNaN(cardTwoValue) || cardTwoValue < 1) {
      alert("Please Add Money");
      document.getElementById("hidden").classList.add("hidden");
      window.location.reload();
      return;
    }
  
    const cardTwoheading = document.getElementById("cardtwoheading ").innerText;
    const taka = "Taka";
    const data = cardTwoValue + " " + taka + " " + cardTwoheading;
    const historySection = document.getElementById("historySection");
  
    const currentTime = new Date();
  
    historySection.innerHTML += `
    <p class = " border p-6 mt-4 mb-4 rounded-2xl ">${data} <br>  <br> <span class = "text-gray-400">${currentTime}</span>  </p>
    `;
  
    const NavtotalMoney = inputText("totalMoney");
    const cardTwoInputValue = inputValue("cardTwo");
    const navUpdateMoney = NavtotalMoney - cardTwoInputValue;
    if (navUpdateMoney < 0) {
      document.getElementById("cardTwo").value = "";
      alert("Please Add Money");
      return;
    }
    document.getElementById("totalMoney").innerText = navUpdateMoney;
    const cardTwoValueStore = inputText("cardTwoSpan");
    const totalMoney = cardTwoValue + cardTwoValueStore;
    document.getElementById("cardTwoSpan").innerText = totalMoney;
    // modar
    document.getElementById("cardmodalbtn").addEventListener("click", () => {
      document.getElementById("cardTwo").value = "";
    });
  });
  // Card Two End
  // Card Three
  document.getElementById("cardThreeBtn").addEventListener("click", (event) => {
    const cardThreeValue = inputValue("cardThree");
    if (isNaN(cardThreeValue) || cardThreeValue < 1) {
      alert("Please Add Money");
      document.getElementById("hidden").classList.add("hidden");
      window.location.reload();
      return;
    }
  
    const cardThreeheading =
      document.getElementById("cardthreeheading").innerText;
    const taka = "Taka";
    const data = cardThreeValue + " " + taka + " " + cardThreeheading;
    const historySection = document.getElementById("historySection");
  
    const currentTime = new Date();
  
    historySection.innerHTML += `
    <p class = " border p-6 mt-4 mb-4 rounded-2xl ">${data} <br>  <br> <span class = "text-gray-400">${currentTime}</span>  </p>
    `;
  
    const NavtotalMoney = inputText("totalMoney");
    const cardThreeInputValue = inputValue("cardThree");
    const navUpdateMoney = NavtotalMoney - cardThreeInputValue;
    if (navUpdateMoney < 0) {
      document.getElementById("cardTwo").value = "";
      alert("Please Add Money");
      return;
    }
    document.getElementById("totalMoney").innerText = navUpdateMoney;
    const cardTreeValueStore = inputText("cardThreeSpan");
    const totalMoney = cardThreeValue + cardTreeValueStore;
    document.getElementById("cardTwoSpan").innerText = totalMoney;
    // modar
    document.getElementById("cardmodalbtn").addEventListener("click", () => {
      document.getElementById("cardThree").value = "";
    });
  });
  // Card Three End
  
  document.getElementById("Donation").addEventListener("click", () => {
    onOf("main");
    onO("Donation");
  });
  document.getElementById("History").addEventListener("click", () => {
    onOf("historySection");
    onO("History");
  });
  document.getElementById("blogbtn", "home").addEventListener("click", () => {
    window.location.href = "./blog.html";
  });