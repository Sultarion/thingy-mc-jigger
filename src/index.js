window.gameState = {
	paused: false,
	gameOver: false,
};

const player = document.getElementById("square");
const speed = 5; // Movement speed

const keys = {
	w: () => {
		position.y -= speed;
		constrain(position);
	},
	a: () => {
		position.x -= speed;
		constrain(position);
	},
	s: () => {
		position.y += speed;
		constrain(position);
	},
	d: () => {
		position.x += speed;
		constrain(position);
	},
};

function constrain(position) {
	position.x = Math.max(0, Math.min(window.innerWidth - 50, position.x));
	position.y = Math.max(0, Math.min(window.innerHeight - 50, position.y));
}

let position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

function updatePosition() {
	if (
		window.gameState.paused === false &&
		window.gameState.gameOver == false
	) {
		player.style.transform = `translate(${position.x}px, ${position.y}px)`;
		requestAnimationFrame(updatePosition);
	}
}

//listener
window.addEventListener("keydown", (e) => {
	if (e.key in keys) {
		keys[e.key](); // do you understand what this even does
	}
});
updatePosition();
