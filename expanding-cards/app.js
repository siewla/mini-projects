const panels = document.querySelectorAll('.panel');

// console.log(panels);

const removeActiveClass = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClass();
    panel.classList.add('active');
  });
});
