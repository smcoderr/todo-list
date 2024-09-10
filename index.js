let input = document.getElementById("input");
      let ul = document.getElementById("ul");

      function add() {
        let liCount = ul.getElementsByTagName('li').length;
        
        if (liCount < 10) {  // Check if there are less than 10 <li> items
            let li = document.createElement('li');
            li.innerHTML = input.value + `<button onclick='deleteitem(event)'>delete</button>`;
            ul.appendChild(li);
            input.value = '';
            input.focus();
        } else {
            alert("Maximum limit of 10 items reached.");
        }
    }
      function deleteitem(event) {
        event.target.parentElement.remove();
      }

      function enters(e) {
        if (e.key === "Enter") {
          button.click();
        }
      }

      input.addEventListener("keypress", enters);