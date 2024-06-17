let likeCount = 1
const renderLikeBtn = (rootElement) => {
    let btn = document.createElement("button")
    btn.innerText = 'Like'
    btn.onclick = likePost(btn)
    rootElement.appendChild(btn)
}
const likePost = (btn) => {
    likeCount++
    btn.innerText = `${likeCount < 2 ? "" : `${likeCount}`} Like${likeCount > 1 ? "s" : ""}`
}
//----------------------------------------------
renderLikeBtn(document.getElementById('post'))
// Domnul Dorin este o problema de odata cum deschizi pagina iti pune doua likeuri si nu poti sa ai mai mult de doua ce sa fac?
