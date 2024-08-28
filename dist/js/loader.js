window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    var content = document.getElementById('content');
  
    // Wait for all resources to load
    var resourcesLoaded = 0;
    var totalResources = 0;
  
    // Count all resources (images, scripts, links, etc.)
    var images = document.images;
    totalResources += images.length;
    var scripts = document.scripts;
    totalResources += scripts.length;
    var links = document.links;
    totalResources += links.length;
  
    // Add event listeners for each resource type
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('load', resourceLoaded);
    }
    for (var i = 0; i < scripts.length; i++) {
      scripts[i].addEventListener('load', resourceLoaded);
    }
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('load', resourceLoaded);
    }
  
    function resourceLoaded() {
      resourcesLoaded++;
      if (resourcesLoaded === totalResources) {
        // All resources loaded, show content
        preloader.style.display = 'none';
        content.style.display = 'block';
      }
    }
  
    // Directly hide preloader (fallback)
    preloader.style.display = 'none';
  });