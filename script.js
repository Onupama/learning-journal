const viewMoreBtn = document.getElementById("view-more-btn")
const viewMoreSection = document.getElementById("view-more-section")

viewMoreBtn.addEventListener('click', viewMore)

function viewMore() {
    viewMoreSection.style.display = 'block'
    viewMoreBtn.style.display = 'none'
}