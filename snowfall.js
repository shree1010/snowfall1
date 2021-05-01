class Snowfall
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=body(random(0,255),random(0,255),random(0,255));
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
		var snowfallPos=this.body.position;	
		var angle = this.body.angle;
		push()
		translate(snowfalloPos.x, snowfallPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(this.body);
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
			
	}

}