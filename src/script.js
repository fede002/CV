
document.addEventListener("DOMContentLoaded", function (event) {
    cargaNube();
});

function cargaNube() {

    // Array con las habilidades y sus puntuaciones
    const skills = [
        ['Desarrollo web back-end', 9],
        ['Magento', 8],
        ['Microsoft SQL Server', 7],
        ['SQL', 8],
        ['Desarrollo de software', 7],
        ['PHP', 9],
        ['Laravel', 9],
        ['Api Rest', 6],
        ['HTML', 8],
        ['JavaScript', 5],
        ['.NET framework', 4],
        ['ASP.NET', 3],
        ['MySQL', 8],
        ['CSS', 4],
        ['HTML5', 5],
        ['jQuery', 4],
        ['C#', 3],
        ['SAP HANA', 2],
        ['ABAP jr', 2]
    ];

    // Función para crear un elemento span con el tamaño de fuente correspondiente
    function createSkill(skill, score) {
        const span = document.createElement('span');
        span.textContent = skill;
        span.style.fontSize = score / 5 + 'vw';
        span.style.padding = '5px';
        span.style.color = 'black';
        span.style.backgroundColor = '#f2f2f2';
        span.style.borderRadius = '5px';
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
