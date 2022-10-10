const checkbox = document.getElementById("isCompany");
const box = document.getElementById("hiddenForm");
checkbox.addEventListener('click', function handleClick(){
    if(checkbox.checked){
        box.style.display = "block";
    }
    else {
        box.style.display = "none";
    }
}
)