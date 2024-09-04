const body = document.body;
body.innerHTML = localStorage.getItem('notes') || '';
body.onkeyup = () => localStorage.setItem('notes', body.innerHTML);

// Inter Tab Synchronization
window.onstorage = (event) => { body.innerHTML = event.newValue; };

// Key Events
document.onkeydown = (event) => {
   // Change Tab to Spaces
   if (event.code === 'Tab') {
      event.preventDefault();
      const spaces = '  ';
      document.execCommand('insertText', false, spaces);
   }
   // Check for ⌘ (or Ctrl) + B
   if ((event.metaKey || event.ctrlKey) && event.key === 'b') {
      event.preventDefault();
      document.execCommand('bold', false, null);
   }
   // Check for ⌘ (or Ctrl) + I
   if ((event.metaKey || event.ctrlKey) && event.key === 'i') {
      event.preventDefault();
      document.execCommand('italic', false, null);
   }
   // Save per ⌘ (or Ctrl) + S
   if ((event.metaKey || event.ctrlKey) && event.key ==='s') {
      event.preventDefault();
      const link = document.createElement('a');
      link.download = 'notes.html';
      link.href = `data:text/html,<!DOCTYPE html>\n${body.parentElement.outerHTML}`;
      link.click();
   }
};
