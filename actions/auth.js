import * as api from '../api/index.js';
import { ValidateEmail } from '../utils/utils.js';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const signin = async (form, router, lang) => {
  const valid = ValidateEmail(form.email);

  try {
    if (!valid) {
      throw new Error('Email not valid');
    }

    const { data } = await api.signIn(form);

    let timerInterval;
    Swal.fire({
      icon: 'success',
      // title: 'Successfully logged in!',
      //   html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        // Swal.showLoading();
        // const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          //   b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        // console.log('I was closed by the timer');
      }
    });

    localStorage.setItem('profile', JSON.stringify(data));

    router.push(`/${lang}/`);
  } catch (err) {
    Swal.fire({
      icon: 'error',
      //   title: 'Oops...',
      text: err?.response?.data.message || err,
      // footer: '<a href="">Why do I have this issue?</a>'
    });
  }
};

export const signup = async (form, router, lang) => {
  const valid = ValidateEmail(form.email);

  try {
    if (!valid) {
      throw new Error('Email not valid');
    }

    if (form.password !== form.confirmPassword) {
      throw new Error('Passwords does not match');
    }

    const { data } = await api.signUp(form);

    let timerInterval;
    Swal.fire({
      icon: 'success',
      title: 'You have been Successfully registered!',
      //   html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        // Swal.showLoading();
        // const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          //   b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });

    localStorage.setItem('profile', JSON.stringify(data));

    router.push(`/${lang}/`);
  } catch (err) {
    Swal.fire({
      icon: 'error',
      //   title: 'Oops...',
      text: err?.response?.data.message || err,
      // footer: '<a href="">Why do I have this issue?</a>'
    });

    // console.log(err);
  }
};
