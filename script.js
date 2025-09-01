const icon = document.getElementById('icon')
const menu = document.getElementById('menu')
const closeBtn = document.getElementById('close-btn')
const viewMoreBtn = document.getElementById("view-more-btn")
const viewMoreSection = document.getElementById("view-more-section")

icon.addEventListener('click', OpenNav)
closeBtn.addEventListener('click', closeNav)
viewMoreBtn.addEventListener('click', viewMore)

function OpenNav() {
    menu.style.right = '0px'
    menu.style.backgroundColor = 'white'
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    closeBtn.style.display = 'inline'
    icon.style.display = 'none'
}

function closeNav() {
    menu.style.right = '-150px'
    document.body.style.backgroundColor = "white";
    icon.style.display = 'inline'
    closeBtn.style.display = 'none'
}

function viewMore() {
    viewMoreSection.style.display = 'block'
    viewMoreBtn.style.display = 'none'
}