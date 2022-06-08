// const defaultSelect = () => {
//     const element = document.querySelector('select');
//     const choices = new Choices(element, {
//           searchEnabled: false,
//           shouldSort: false
//       }); 
//     }
    
//     defaultSelect();

    const multiDefaultSelect = () => {
      const elements = document.querySelectorAll('.multi-default');
      elements.forEach(el => {
        const choices = new Choices(el, {
          searchEnabled: false,
          shouldSort: false
      });
      });
    
      }

      multiDefaultSelect();