class Drops
{
    constructor(x, y, radius)
    {
        var options=
        {
            isStatic: false,
            friction:0.1,
            density:1.0,
        }
        this.rain = Bodies.circle(x, y, radius, options)
        this.radius = radius
        World.add(world,this.rain);

    }
    display()
    {
        
        push();
        translate(this.rain.position.x, this.rain.position.y);
        rotate()
        ellipseMode(RADIUS);
        this.scale = 1.5;
        ellipse(0, 0, this.radius);
        pop();
    }
    
}