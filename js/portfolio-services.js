'use strict';
var gProj;

function creatProject() {
	return [
		{
			id: 'pacman',
			name: 'Pacman',
			title: 'Better push those boxes',
			desc: 'lorem ipsum lorem ipsum lorem ipsum',
			url: 'projs/sokoban',
			publishedAt: 1448693940000,
			labels: ['Matrixes', 'keyboard events'],
		},
		{
			id: 'bar',
			name: 'bar',
			title: 'Better push those boxes',
			desc: 'lorem ipsum lorem ipsum lorem ipsum',
			url: 'projs/sokoban',
			publishedAt: 1448693940000,
			labels: ['Matrixes', 'keyboard events'],
		},
		{
			id: 'Minesweeper',
			name: 'Minesweeper',
			title: 'Better push those boxes',
			desc: 'lorem ipsum lorem ipsum lorem ipsum',
			url: 'projs/sokoban',
			publishedAt: 1448693940000,
			labels: ['Matrixes', 'keyboard events'],
		},
	];
}

function getProject() {
	return (gProj = creatProject());
}

function getProjById(projId) {
	return gProj.find(function (project) {
		return project.id === projId;
	});
}
