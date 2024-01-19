document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addSkillForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const skillName = document.getElementById('skillName').value;
        fetch('https://testapi.io/api/Evelina/skills', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ skill: skillName })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.success) {
                alert('Skill added successfully');
                window.location.href = 'index.html'; 
            } else {
                alert('Error adding skill');
            }
        })
        .catch(error => {
            console.error('Error adding skill:', error);
        });
    });
});
