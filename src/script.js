
document.addEventListener("DOMContentLoaded", function (event) {
    cargaNube();
});

function cargaNube() {

    // Array con las habilidades y sus puntuaciones
    const skills = [
        ['Desarrollo web back-end', 9],
        ['PHP', 9],
        ['Laravel', 9],
        ['Magento', 8],
        ['SQL', 8],
        ['MySQL', 8],
        ['Api Rest', 8],
        ['Desarrollo de software', 7],
        ['Microsoft SQL Server', 7],
        ['HTML', 7],
        ['JavaScript', 6],
        ['HTML5', 5],
        ['jQuery', 5],
        ['.NET framework', 4],
        ['CSS', 4],
        ['C#', 4],
        ['SAP HANA', 3],
        ['ABAP jr', 3],
        ['ASP.NET', 3],
    ];

    // Función para crear un elemento span con el tamaño de fuente correspondiente
    function createSkill(skill, score) {
        const span = document.createElement('span');
        span.textContent = skill;
        span.style.fontSize = score / 5 + 'vw';
        span.style.padding = '14px';
        span.style.color = 'black';
        span.style.backgroundColor = '#f2f2f2';
        span.style.borderRadius = '17px';
        span.style.display = 'inline-block';
        span.style.margin = '5px';
        return span;
    }

    // Obtener el contenedor de la nube
    const cloud = document.getElementById("nube");

    // Crear y agregar los elementos span al contenedor
    skills.forEach(skill => {
        const span = createSkill(skill[0], skill[1]);
        cloud.appendChild(span);
    });

}
