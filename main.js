function adding() {
    const liczba1 = document.getElementById('liczba1').value
    const liczba2 = document.getElementById('liczba2').value
    document.getElementById('wynik').innerHTML = liczba1 + liczba2
    console.log(liczba1, liczba2)
}