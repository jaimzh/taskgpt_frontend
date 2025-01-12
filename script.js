function autoResize(textarea) {
    textarea.style.height = 'auto';  // Reset height to auto to allow resizing
    textarea.style.height = (textarea.scrollHeight) + 'px';  // Set height to the scrollHeight (total height of content)
  }
  