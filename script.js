document.getElementById('articleForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (title && content) {
    document.getElementById('preview').innerHTML = `
      <h2>${title}</h2>
      <p>${content.replace(/\n/g, '<br>')}</p>
    `;
  }
});
