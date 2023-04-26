
MyGame.systems.particleSystem = (function() {

    var MyparticleSystem = null;
    var active = false;

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
            console.log('particalSystem: upddate');
            for (var i = 0; i < this.particles.length; i++) {
                var particle = this.particles[i];
                particle.update();
                
                MyGame.graphics.drawParticle(particle);
            }

            this.lifetime--;

            if (this.lifetime <= 0) {
                this.particles = [];
                active = false;
                MyparticleSystem = null;
                console.log('End of particles');
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
        console.log('partical system created');
        active = true
        MyparticleSystem = new ParticleSystem(x, y, 50, 30);
        console.log(MyparticleSystem);
    }
    
    function update(){
        // console.log('Psystem: update');
        MyparticleSystem.update();
    }

    // Return the canvas and particle system to the global scope
    let api = {
        createParticleSystem: createParticleSystem,
        update:update,
        get active(){return active;}

    };
    return api;
})();

