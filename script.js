
// hamburger_menu 
let  hamburger_menu = document.querySelector(".hamburger-menu")
let nav = document.querySelector(".nav")
let linksAll  = document.querySelectorAll(".links")
let links  = document.querySelector(".links")

hamburger_menu.addEventListener ("click" ,  function () {
       hamburger_menu.classList.toggle("close") ;
      links.classList.toggle("open")

} )

linksAll.forEach(link => {
            link.addEventListener("click" , function() {
                  hamburger_menu.classList.remove("close") ;
                  links.classList.remove("open")
            })      
})

// Projects Filter 
let all_projects = document.querySelectorAll(".projects-container")
let filter =document.querySelectorAll(".filter-btn")
 function filterItems (value) {
       if(value =" all") {
               }
 }
filter.forEach((item) => {
  let item_data = item.dataset.filter 

  item.addEventListener("click" , function(e) {
           filterItems(e.target.item_data)
  })
 
})

//  toggle 
let toggles = document.querySelectorAll(".toggles")
toggles.forEach(toggle => {
 toggle.addEventListener("click" , function() {
       toggle.parentNode.classList.toggle("active")
 })
   
})

// circles
let all_circles  = document.querySelectorAll(".circle")
all_circles.forEach((circle) => {
      circle.addEventListener("click" , function(e) {
             
all_circles.forEach((item) =>  {
      item.classList.remove("active")
          })    
           e.currentTarget.classList.add("active")
      })
})

//    users data
let users_data = [
   {
      name :  "Ahmed Zaid" ,
      job_title : "Front End Deveolper ",
      src:"imags/IMG_-a3xzof-removebg-preview (1).png"
   } ,
   {
      name :  "Reiss Mcceee" ,
      job_title : "Engeiner ",
      src :"imags/Derek Lomas Still life Photography.jpg"
   } ,
   {
      name :  "Jon Hare" ,
      job_title : "Doctor",
      src :"imags/headshot.jpg"
   } ,
   {
      name :  "Worker" ,
      job_title : "Enginerr ",
      src :"imags/San Francisco Professional Headshots For Business, Linkedin.jpg"
   } 
]

let review_text = document.querySelector(".review-text")
let review_name = document.querySelector(".review-name")
let review_job = document.querySelector(".review-job")
let image = document.querySelector(".swiper-image > .img")
let next_arrow = document.querySelector(".next-arrow")
let prev_arrow = document.querySelector(".prev-arrow")

let count = 0
function increase () {
      let selected = users_data[count]
      review_name.innerHTML = selected.name 
      review_job.innerHTML = selected.job_title 
      image.src  = selected.src
      
      count ++ 
      if(count >= users_data.length) {
            count =0 
      }
    
}

function decrease () {
      let selected = users_data[count]
      review_name.innerHTML = selected.name 
      count -- 
      if(count =0) {
            count =3 
      }
    
}

next_arrow.addEventListener("click" , function() {
      increase()

})


prev_arrow.addEventListener("click" , function() {
     decrease()

})








