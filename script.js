const menu = document.getElementById('menu')
const index = document.getElementById('index')
const projects = document.getElementById('projects')
const menuHidden = document.getElementById('menu-hidden')
projects.style.top = menu.clientHeight+'px'
const bigs = document.getElementsByClassName("big")
const bigIMG = document.getElementById("bigIMG")
const rights = document.getElementById("rights")
let previousWidth = window.innerWidth
for (let i=1;i<bigs.length;i++) {
  bigs[i].style.display = 'none'
}
// if (window.innerWidth <= 600) {
//   changeVideo(true)
// } else {
//   changeVideo(false)
// }
// let ro = new ResizeObserver( entries => {
//   for (let entry of entries) {
//     const cr = entry.contentRect
//     if (window.innerWidth <= 600 && previousWidth > 600) {
//       changeVideo(true)
//     } else if (window.innerWidth >= 600 && previousWidth < 600) {
//       changeVideo(false)
//     }
//   }
//   previousWidth = window.innerWidth
// })
// ro.observe(document.body)
const throttle = (fn, delay) => {
  let time = Date.now()
  return () => {
    if((time + delay - Date.now()) <= 0) {
      fn()
      time = Date.now()
    }
  }
}
window.addEventListener('wheel', throttle(nextBig, 1500))
function openMenu() {
  if (menuHidden.style.display == 'none' || menuHidden.style.display == '') {
    menuHidden.style.display = 'block'
    projects.style.top = menu.clientHeight+'px'
  } else {
    menuHidden.style.display = 'none'
    projects.style.top = menu.clientHeight+'px'
  }
}
function nextBig() {
  let img = window.event.target
  let imgID = img.id
  let currentIMG = parseInt(imgID.slice(3))
  if (currentIMG < bigs.length) {
    for (let i=0; i<bigs.length; i++) {
      if (i == currentIMG) {
        bigs[i].style.display = 'initial'
      } else {
        bigs[i].style.display = 'none'
      }
    }
  } else {
    for (let i=1; i<bigs.length; i++) {
      bigs[i].style.display = 'none'
    } 
    bigs[0].style.display = 'initial'
  }
}
function goToIndex() {
  document.body.style.overflow = 'visible'
  document.body.style.overflowX = 'hidden'
  index.style.display = 'initial'
  bigIMG.style.display = 'none'
  rights.style.display = 'initial'
  projects.style.top = menu.clientHeight+'px'
}
function goToBig() {
  document.body.style.overflow = 'hidden'
  rights.style.display = 'none'
  let img = window.event.target
  let currentID = img.parentElement.parentElement.id
  let currentIMG = parseInt(currentID.slice(7))
  for (let i=0; i<bigs.length; i++) {
    bigs[i].style.display = 'none'
  }
  bigs[currentIMG-1].style.display = 'initial'
  index.style.display = 'none'
  bigIMG.style.display = 'initial'
}
function changeVideo(small) {
  let videos = []
  let videosSRC = [
    [],
    ['assets/images/TG_IV_new2.mp4','assets/images/EL_01.mp4'],
    ['assets/images/D_VI_new2.mp4','assets/images/EL_01.mp4'],
    ['assets/images/MP_VI2_new2.mp4','assets/images/EL_01.mp4'],
    ['assets/images/EF_IV_new2.mp4','assets/images/EL_01.mp4'],
    ['assets/images/K_VI_new2.mp4','assets/images/EL_01.mp4'],
    ['assets/images/ISA_VI_neu2.mp4','assets/images/EL_01.mp4'],
    ['assets/images/K_IV_new2.mp4','assets/images/EL_01.mp4'],
    ['assets/images/RM_VI_new2.mp4','assets/images/EL_01.mp4'],
    []
  ]
  for (let i=0;i<bigs.length+1;i++) {
    videos[i] = document.getElementById("big-video"+i)
  }
  for (let x=0;x<videos.length;x++) {
    if (videos[x] == null) {
      void(0)
    } else {
      if (small == true) {
        videos[x].src = videosSRC[x][1]
      } else {
        videos[x].src = videosSRC[x][0]
      }
    }
  }
}