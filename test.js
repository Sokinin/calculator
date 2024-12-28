
  // Show history in a pop-up modal
  function showHistory() {
    const historyContainer = document.querySelector('.history');
    historyContainer.innerHTML = ''; // Clear old history content
  
    // Loop through localStorage and populate history
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
  
      const historyItem = document.createElement('div');
      historyItem.textContent = `${key} ${value}`;
      historyContainer.appendChild(historyItem);
    }
  
    // Display the modal
    const modal = document.getElementById('historyModal');
    modal.style.display = 'block';
  }
  
  // Close the history pop-up
  function closeHistory() {
    const modal = document.getElementById('historyModal');
    modal.style.display = 'none';
  }
  
  // Close the modal if user clicks outside of it
  window.onclick = function (event) {
    const modal = document.getElementById('historyModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  