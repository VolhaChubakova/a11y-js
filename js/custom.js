(function() {
  var burger = document.querySelector(".burger");
  var menu = document.querySelector("#" + burger.dataset.target);
  burger.addEventListener("click", function() {
    var state = burger.getAttribute("aria-expanded"); 
    console.log(state);

    if (state == "true") 
  {
    state = "false"
  } else {
    state = "true"
  }

  burger.setAttribute("aria-expanded", state);

    burger.classList.toggle("is-active");
    //burger.setAttribute('aria-expanded', true);
    menu.classList.toggle("is-active");

  });
})();


var navTabs = document.querySelectorAll("#nav li");
navTabs.forEach(function(navEl, index) {  
  navEl.addEventListener('keydown', e => {
    //keycodes:
    // 35 end
    // 36 home
    // 37 left
    // 39 right

    if (e.keyCode == 35 || e.keyCode == 36  || e.keyCode == 37 || e.keyCode == 39) {
       navEl.classList.remove("is-active");
       navEl.childNodes[1].setAttribute('tabindex', -1);
       var nextNavElement;       
       if (e.keyCode == 39) {
          nextNavElement = navTabs[index + 1];
       }
       if (e.keyCode == 37) {
          nextNavElement = navTabs[index - 1];
       }

       if (e.keyCode == 35) {
          nextNavElement = navTabs[navTabs.length - 1];
       }

       if (e.keyCode == 36) {
        nextNavElement = navTabs[0];
       }
      nextNavElement.childNodes[1].setAttribute('tabindex', 0);
      nextNavElement.childNodes[1].focus();
      e.preventDefault();
      toggleTab(nextNavElement.id, nextNavElement.dataset.target);
    }
  });


  navEl.onclick = function() {
    toggleTab(this.id, this.dataset.target);
  };
});


function toggleTab(selectedNav, targetId) {
  var navEls = document.querySelectorAll("#nav li");

  navEls.forEach(function(navEl) {      
    if (navEl.id == selectedNav) {
      navEl.classList.add("is-active");
      navEl.firstElementChild.setAttribute('aria-selected', true); 
      navEl.firstElementChild.setAttribute('tabindex', 0);
    } else {  
      if (navEl.classList.contains("is-active")) {
        navEl.classList.remove("is-active");
      }
      navEl.firstElementChild.setAttribute('aria-selected', false);
      navEl.firstElementChild.setAttribute('tabindex', -1);
    } 
  });

  var tabs = document.querySelectorAll(".tab-pane");

  tabs.forEach(function(tab) {
    if (tab.id == targetId) {
      tab.style.display = "block";
    } else {
      tab.style.display = "none";
    }
  });
}

function wishGoodDay() {
  var textForUser = document.getElementById('last_news');
  textForUser.innerHTML='We have got interesting news for you';
  setTimeout(wishGoodDay, 60000);
}

wishGoodDay();


