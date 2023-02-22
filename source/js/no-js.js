document.addEventListener('DOMContentLoaded', () => {
  const nojsElements = document.querySelectorAll('[class*="no-js"]')

  nojsElements.forEach((element) => {
    element.classList.forEach((className) => {
      if (className.includes('nojs')) {
        element.classList.remove(className)
      }
    })
  })
})

/* if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}
 */
