const selector = document.querySelector("input[type='tel']");

const im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);


const validation = new JustValidate('.form');

validation
  .addField('#name', [
  {
    rule: 'required',
    errorMessage: 'Как вас зовут?',
  },
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Не короче 3 символов',
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Слишком длинное имя',
  },
])
  .addField('#tel', [
  {
    rule: 'required',
    errorMessage: 'Укажите ваш телефон',
  },
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue();
      return Number(phone) && phone.length === 10;
    },
    errorMessage: 'Телефон не корректный!',
  },
]);





// new JustValidate('.form', {



//     rules: {
//         name: {
//             required: true,
//             minLength: 2,
//             maxLength: 10,
//             errorMessage: 'vvedite im9',
//         },


//         tel: {
//             required: true,
//             function: (name, value) => {
//                 const phone = selector.inputmask.unmaskedvalue()
//                 return Number(phone) && phone.length === 10
//             },
//             errorMessage: 'Телефон не корректный!',
//         },

//     },


// });



// const validation = new JustValidate('#form');

// validation
//   .addField('#name', [
//     {
//       rule: 'required',
//       value: 2,
//     },
//     {
//       rule: 'maxLength',
//       value: 30,
//     },
//   ])

//   .showErrors({ '#name': 'The email is invalid' })
