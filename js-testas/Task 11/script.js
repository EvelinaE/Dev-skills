document.addEventListener('DOMContentLoaded', () => {
    fetchSkills();

    function fetchSkills() {
        fetch('https://api.testapi.io/api/v1/skills') 
            .then(data => {
                updateTable(data);
            })
            .catch(error => {
                console.error('Error fetching skills:', error);
            });
    }

    function updateTable(skills) {
        const tableBody = document.getElementById('skillsTable').getElementsByTagName('tbody')[0];
        tableBody.innerHTML = ''; 

        skills.forEach(skill => {
            let row = tableBody.insertRow();
            row.insertCell(0).innerHTML = skill.id;
            row.insertCell(1).innerHTML = skill.skill;
            let deleteCell = row.insertCell(2);
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteSkill(skill.id);
            deleteCell.appendChild(deleteButton);
        });
    }

    function deleteSkill(id) {
        fetch(`https://testapi.io/api/Evelina/skill/${id}`, { method: 'DELETE' }) 
            .then(response => {
                if (response.ok) {
                    alert('Skill deleted successfully');
                    fetchSkills(); 
                } else {
                    alert('Error deleting skill');
                }
            })
            .catch(error => {
                console.error('Error deleting skill:', error);
            });
    }
});
