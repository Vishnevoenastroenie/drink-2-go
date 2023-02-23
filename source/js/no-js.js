document.addEventListener('DOMContentLoaded', () => {
  const nojsElements = document.querySelectorAll('[class*="no-js"]')

  nojsElements.forEach((element) => {
    element.classList.forEach((className) => {
      if (className.includes('no-js')) {
        element.classList.remove(className)
      }
    })
  })
})
