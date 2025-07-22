// Show skeleton loader immediately when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const template = document.getElementById('skeleton-template');
  const realContent = document.getElementById('real-content');
  
  if (template) {
    // Clone and show skeleton
    const clone = template.content.cloneNode(true);
    document.body.appendChild(clone);
  }
  
  // After 3 seconds, hide skeleton and show real content
  setTimeout(function() {
    const skeleton = document.getElementById('full-page-skeleton-overlay');
    if (skeleton) {
      skeleton.remove();
    }
    if (realContent) {
      realContent.style.display = 'block';
    }
    document.body.classList.remove('loading');
  }, 3000);
});