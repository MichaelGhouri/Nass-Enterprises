// script.js

// Function to create a leaf
function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    
    // Random horizontal position for the leaf
    leaf.style.left = Math.random() * 100 + 'vw';
    
    // Random fall duration between 2 to 5 seconds
    leaf.style.animationDuration = Math.random() * 3 + 2 + 's';
    
    // Random size for the leaves
    let leafSize = Math.random() * 40 + 40; // Between 20px and 40px
    leaf.style.width = leafSize + 'px';
    leaf.style.height = leafSize + 'px';
    
    document.body.appendChild(leaf);
    
    // Remove the leaf after it falls off the screen
    setTimeout(() => {
        leaf.remove();
    }, 5000); // Match duration of the fall
}

// Continuously generate leaves at intervals
setInterval(createLeaf, 500); // New leaf every 500ms
