# etch-a-sketch

Create a webpage with a 16x16 grid of square divs

Set up a “hover” effect so that the grid divs change color when your mouse 
passes over them, leaving a (pixelated) trail through your grid like a pen would.

Add a button on the top of the screen that will send the user a popup asking for 
the number of squares per side for the new grid. Once entered, the existing grid 
should be removed, and a new grid should be generated in the same total space as 
before (e.g., 960px wide) so that you’ve got a new sketch pad.

Transform the behavior of a square when interacting with the mouse by introducing 
a series of modifications.

Rather than squares being the same color throughout the grid, randomize the 
squares’ RGB values with each interaction.
Additionally, implement a progressive darkening effect where each interaction 
darkens the square by 10%. The goal is to achieve a fully black (or completely 
colored) square in only ten interactions.