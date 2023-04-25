
MyGame.systems.particleSystem = (function() {

    var particleSystem = null;

    // Define the particle system
    function ParticleSystem(x, y, numParticles, lifetime) {
        this.particles = [];
        this.lifetime = lifetime;

        // Create the particles
        for (var i = 0; i < numParticles; i++) {
            var particle = new Particle(x, y);
            this.particles.push(particle);
        }

        // Update the particles and draw them to the canvas
        this.update = function() {
            for (var i = 0; i < this.particles.length; i++) {
                var particle = this.particles[i];
                particle.update();

                MyGame.graphics.drawParticle(particle);
            }

            this.lifetime--;

            if (this.lifetime <= 0) {
                this.particles = [];
                particleSystem = null;
            }
        }
    }

    // Define the particle object
    function Particle(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 2;
        this.speedX = Math.random() * 10 - 5;
        this.speedY = Math.random() * 10 - 5;
        this.color = "#"+((1<<24)*Math.random()|0).toString(16);
        this.lifetime = 30;
        this.gravity = 0.1;
        this.alpha = 1; // initialize the opacity to 1

        // Update the particle's position, velocity, and opacity with gravity and fading
        this.update = function() {
            this.speedY += this.gravity;
            this.x += this.speedX;
            this.y += this.speedY;
            this.alpha = this.lifetime / 30; // decrease the opacity over time
            this.lifetime--;
        }
    }

    

    // Create a new particle system at the given x and y position
    function createParticleSystem(x, y) {
        var particleSystem = new ParticleSystem(x, y, 50, 30);
        return particleSystem;
    }

    // Return the canvas and particle system to the global scope
    let api = {
        createParticleSystem: createParticleSystem,
        get particleSystem(){ return particleSystem}

    };
    return api;
})();

