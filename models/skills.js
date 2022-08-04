const skills = [
    { id: 125223, skill: 'Artificial Intelligence', done: true },
    { id: 127904, skill: 'Flutter Dev', done: false },
    { id: 139608, skill: 'Kotlin Dev', done: false }
];

module.exports = {
    getAll,
    getOne,
    create,
};

function getAll() {
    return skills;
}

function getOne(id) {
	// Use the Array.prototype.find iterator method
	return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
	// Add the id
	skill.id = Date.now() % 1000000;
	// New todos wouldn't be done :)
	skill.done = false;
	skills.push(skill);
  }